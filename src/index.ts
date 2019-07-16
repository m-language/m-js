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

const error = err =>
  console.error(chalk.bgRedBright(" error "), err.toString());

const log = x => {
  console.log(x);
  return x;
};

const compileSource = async (source: string): Promise<string> => {
  let result = parse(source);
  let generated = mjs.generate(
    mjs.convert(result.map(arr => arr.slice(1, arr.length)))
  );
  return readFile(runtime)
    .then(runtime => runtime + "\n" + generated)
    .then(data => babel.transform(data, { presets: ["es2015"] }).code);
};

const bootstrap = async (revision: string): Promise<string> => {
  return getMinifiedCompiler(revision)
    .then(res => res.data)
    .then(compileSource);
};

const args = process.argv.slice(2);

switch (args[0]) {
  case "bootstrap":
    if (args[1]) {
      mkdir("bootstrap")
        .catch(_ => {})
        .then(_ => bootstrap(args[1]))
        .then(data => writeFile("bootstrap/m.js", data))
        .catch(error);
    } else {
      error("no revision or branch supplied");
    }
    break;
  case "build":
    if (args[1]) {
      readFile(args[1])
        .then(res => compileSource(res.toString()))
        .then(gen => writeFile(`${args[1]}.js`, gen))
        .catch(error);
    } else {
      error("no revision or branch supplied");
    }
    break;
  default:
    error("invalid invocation");
}
