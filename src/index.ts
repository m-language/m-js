import chalk from "chalk";
import parse from "./parse";
import get from "./get";
import * as mjs from "./m";
import fs from "fs";
import { promisify } from "util";
import babel = require("@babel/standalone");

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

export const runtime = "runtime/core.js";

const error = err =>
  console.error(chalk.bgRedBright(" error "), err.toString());

const log = x => {
  console.log(x);
  return x;
};

get("master")
  .then(res => res.data)
  .then(parse)
  .then(result =>
    mjs.convert(result.map(arr => arr.slice(1, arr.length)))
  )
  .then(file => {
    let decls = mjs.externalDeclarations(file, {
      debug: "console.log"
    });
    return file;
  })
  .then(mjs.generate)
  .then(data => readFile(runtime).then(runtime => runtime + "\n" + data))
  .then(data => babel.transform(data, { presets: ["es2015"] }).code)
  .then(data => writeFile("out.js", data))
  .catch(error);
