import escodegen from "escodegen";
import _, { Dictionary } from "lodash";
import {
  Node,
  ArrowFunctionExpression,
  Expression,
  ExportNamedDeclaration,
  Identifier,
  CallExpression,
  Declaration,
  VariableDeclaration
} from "estree";

interface MFile {
  definitions: { [name: string]: VariableDeclaration };
  external: string[];
}

export const generateNode = (node: Node): string => escodegen.generate(node, { format: { compact: true } });

export const toSafeName = (name: string): string => {
  let split = name.split("");
  let toSafeChar = (char: string) => {
    if (char.length != 1) throw new Error(`passed a string when a char was expected: ${char}`);
    if (/[a-zA-Z]/.test(char)) {
      return char;
    } else {
      return `_${char.charCodeAt(0)}`;
    }
  };
  return "m_" + split.map(toSafeChar).join("");
};

export const convertFunction = (params: string[], body: any, env: Dictionary<string>): ArrowFunctionExpression => {
  let childEnv = _.clone(env);
  params.forEach(param => (childEnv[param] = toSafeName(param)));
  return {
    type: "ArrowFunctionExpression",
    params: params.map(param => ({
      type: "Identifier",
      name: childEnv[param]
    })),
    expression: true,
    body: convertExpression(body, childEnv)
  };
};

export const convertLiteral = (expr: any, env: Dictionary<string>): Expression => {
  return {
    type: "Identifier",
    name: env[expr]
  };
};

export const convertApply = (expr: any[], env: Dictionary<string>): CallExpression => {
  let callTarget = expr[0];
  let params = _.slice(expr, 1);
  return {
    type: "CallExpression",
    arguments: [
      {
        type: "Literal",
        value: null
      },
      {
        type: "ArrayExpression",
        elements: params.map(el => convertExpression(el, env))
      }
    ],
    callee: {
      type: "MemberExpression",
      computed: false,
      object: convertExpression(callTarget, env),
      property: {
        type: "Identifier",
        name: "apply"
      }
    }
  };
};

export const convertSymbol = (expr: any, env: Dictionary<string>): CallExpression => {
  return {
    type: "CallExpression",
    arguments: [
      {
        type: "Literal",
        value: expr as string
      }
    ],
    callee: {
      type: "Identifier",
      name: env["symbol"]
    }
  };
};

export const convertExpression = (expr: any, env: Dictionary<string>): Expression => {
  if (Array.isArray(expr)) {
    if (expr[0] === "fn") {
      let body = _.last(expr);
      let params = _.slice(expr, 1, expr.length - 1);
      return convertFunction(params, body, env);
    } else {
      if (expr[0] === "symbol") {
        return convertSymbol(expr[1], env);
      } else {
        return convertApply(expr, env);
      }
    }
  } else {
    return convertLiteral(expr, env);
  }
};

export const convert = (parsed: [string, any][], overrides: Dictionary<string>): MFile => {
  let externs = [];
  let topLevelDeclarations: Dictionary<Expression> = {};
  let names = parsed.map(([name]) => name);

  let thisEnv = {};
  names.forEach(name => (thisEnv[name] = toSafeName(name)));

  let env = _.merge(thisEnv, overrides);

  parsed.forEach(([name, val]) => {
    if (name === val) {
      externs.push(name);
    } else {
      topLevelDeclarations[name] = convertExpression(val, env);
    }
  });
  let declarationEntries = Object.entries(topLevelDeclarations).map(
    ([name, value]: [string, Expression]): [string, VariableDeclaration] => {
      let id: Identifier = {
        type: "Identifier",
        name: env[name]
      };
      return [
        name,
        {
          type: "VariableDeclaration",
          kind: "const",
          declarations: [
            {
              type: "VariableDeclarator",
              id,
              init: value
            }
          ]
        }
      ];
    }
  );
  return {
    external: externs,
    definitions: _.fromPairs(declarationEntries)
  };
};

export const toExportedName = (decl: Declaration, id: Identifier): ExportNamedDeclaration => {
  return {
    type: "ExportNamedDeclaration",
    specifiers: [
      {
        type: "ExportSpecifier",
        exported: id,
        local: id
      }
    ],
    declaration: decl
  };
};

export const generate = (file: MFile, env: Dictionary<string>): string =>
  generateNode({
    type: "Program",
    sourceType: "module",
    body: _.entries(file.definitions).map(([name, expr]) =>
      toExportedName(expr, { type: "Identifier", name: env[name] })
    )
  });

export const overrides = (file: MFile, overrides: Dictionary<string>): Dictionary<string> => {
  return _.fromPairs(file.external.map(override => [override, overrides[override]]));
};
