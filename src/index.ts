import "core-js";
import chalk from "chalk";
import parse from "./parse";
import getMinifiedCompiler from "./min";
import * as mjs from "./compile";
import fs from "fs";
import { promisify } from "util";
import babel = require("@babel/standalone");
import { envOf, runProgram } from "./interpreter";

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

const error = err => console.error(chalk.bgRedBright(" error "), err);

const compileSource = async (source: string, env: any): Promise<string> => {
  const result = parse(source);
  const generated = mjs.generate(mjs.convert(result.map((arr: Array<any>) => arr.slice(1, arr.length)), env), env);
  return babel.transform(generated, { presets: ["es2015"] }).code;
};

const bootstrap = async (revision: string, env: any): Promise<string> => {
  return getMinifiedCompiler(revision)
    .then(res => res.data)
    .then(data => compileSource(data, env));
};

const args = process.argv.slice(2);

(async () => {
  switch (args[0]) {
    case "bootstrap":
      if (args[1]) {
        await mkdir("bootstrap").catch(_ => {});
        const data = await bootstrap(args[1], {});
        await writeFile("bootstrap/m.js", data);
      } else {
        throw new Error("no revision or branch supplied");
      }
      break;
    case "build":
      if (args[1]) {
        return readFile(args[1])
          .then(res => compileSource(res.toString(), {}))
          .then(gen => writeFile(`${args[1]}.js`, gen))
          .catch(error);
      } else {
        throw new Error("no file supplied");
      }
      break;
    case "run":
      if (args[1]) {
        const source = await readFile(args[1]);
        runProgram(source.toLocaleString(), envOf());
      } else {
        throw new Error("no file supplied");
      }
      break;
    default:
      throw new Error("Invocation Error: Usage: mjs (bootstrap | build <file> | run <file>)");
  }
})();
