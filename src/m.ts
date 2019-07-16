import escodegen from "escodegen";
import _, { Dictionary } from "lodash";
import {
  Node,
  ArrowFunctionExpression,
  Expression,
  ExportNamedDeclaration,
  Identifier,
  CallExpression,
  Program,
  Literal,
  Declaration,
  VariableDeclaration
} from "estree";
import { file } from "@babel/types";

interface MFile {
  definitions: { [name: string]: VariableDeclaration };
  external: string[];
}

interface ExternValue {
  overrideName: string;
  internalName: string;
}

export const generateNode = (node: Node): string =>
  escodegen.generate(node, { format: { compact: true } });

export const toSafeName = (name: string): string => {
  let split = name.split("");
  let toSafeChar = char => {
    if (/[a-zA-Z]/.test(char)) {
      return char;
    } else {
      return `_${char.charCodeAt(0)}`;
    }
  };
  return "m_" + split.map(toSafeChar).join("");
};

export const convertFunction = (
  params: string[],
  body: any
): ArrowFunctionExpression => {
  return {
    type: "ArrowFunctionExpression",
    params: params.map(param => ({
      type: "Identifier",
      name: toSafeName(param)
    })),
    expression: true,
    body: convertExpression(body)
  };
};

export const convertLiteral = (expr: any): Expression => {
  return {
    type: "Identifier",
    name: toSafeName(expr)
  };
};

export const convertApply = (expr: any[]): CallExpression => {
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
        elements: params.map(convertExpression)
      }
    ],
    callee: {
      type: "MemberExpression",
      computed: false,
      object: convertExpression(callTarget),
      property: {
        type: "Identifier",
        name: "apply"
      }
    }
  };
};

export const convertSymbol = (expr: any): CallExpression => {
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
      name: "__to_m_symbol"
    }
  };
};

export const convertExpression = (expr: any): Expression => {
  if (Array.isArray(expr)) {
    if (expr[0] === "fn") {
      let body = _.last(expr);
      let params = _.slice(expr, 1, expr.length - 1);
      return convertFunction(params, body);
    } else {
      if (expr[0] === "symbol") {
        return convertSymbol(expr[1]);
      } else {
        return convertApply(expr);
      }
    }
  } else {
    return convertLiteral(expr);
  }
};

export const convert = (parsed: [string, any][]): MFile => {
  let externs = [];
  let topLevelDeclarations: Dictionary<Expression> = {};

  parsed.forEach(([name, val]) => {
    if(name === val){
      externs.push(name);
    }else{
      topLevelDeclarations[name] = convertExpression(val);
    }
  });

  let declarationEntries = Object.entries(topLevelDeclarations).map(
    ([name, value]: [string, Expression]): [string, VariableDeclaration] => {
      let id: Identifier = {
        type: "Identifier",
        name: toSafeName(name)
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

export const toExportedName = (
  decl: Declaration,
  id: Identifier
): ExportNamedDeclaration => {
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

export const generate = (file: MFile): string =>
  generateNode({
    type: "Program",
    sourceType: "module",
    body: _.entries(file.definitions).map(([name, expr]) => toExportedName(expr, { type: "Identifier", name: name }))
  });

export const overrides = (file: MFile, overrides: Dictionary<string>): Dictionary<string> => {
  return _.fromPairs(file.external.map(override => [override, overrides[override]]))
};