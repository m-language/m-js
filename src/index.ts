import chalk from "chalk";
import parse from "./parse";
import getMinifiedCompiler from "./get";
import * as mjs from "./m";
import fs from "fs";
import { promisify } from "util";
import babel = require("@babel/standalone");

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

export const runtime = "runtime/core.js";

const error = err => console.error(chalk.bgRedBright(" error "), err);

const log = x => {
  console.log(x);
  return x;
};

const compileSource = async (source: string, env: any): Promise<string> => {
  let result = parse(source);
  let generated = mjs.generate(
    mjs.convert(result.map(arr => arr.slice(1, arr.length)), env),
    env
  );
  return readFile(runtime)
    .then(runtime => runtime + "\n" + generated)
    .then(data => babel.transform(data, { presets: ["es2015"] }).code);
};

const bootstrap = async (revision: string, env: any): Promise<string> => {
  return getMinifiedCompiler(revision)
    .then(res => res.data)
    .then(data => compileSource(data, env));
};

const args = process.argv.slice(2);

readFile("runtime/mappings.json")
  .then(data => JSON.parse(data.toString()))
  .then(async (overloads: any) => {
    switch (args[0]) {
      case "bootstrap":
        if (args[1]) {
          return mkdir("bootstrap")
            .catch(_ => {})
            .then(_ => bootstrap(args[1], overloads))
            .then(data => writeFile("bootstrap/m.js", data))
            .catch(error);
        } else {
          throw new Error("no revision or branch supplied");
        }
      case "build":
        if (args[1]) {
          return readFile(args[1])
            .then(res => compileSource(res.toString(), overloads))
            .then(gen => writeFile(`${args[1]}.js`, gen))
            .catch(error);
        } else {
          throw new Error("no revision or branch supplied");
        }
      default:
        throw new Error("invalid invocation");
    }
  }).catch(error);
