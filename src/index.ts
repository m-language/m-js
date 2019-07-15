import meow from "meow";
import chalk from "chalk";
import parse from "./parse";
import get from "./get";
import * as mjs from "./m";

const error = err =>
  console.error(chalk.bgRedBright(" error ") + err.toString());

get("master")
  .then(res => res.data)
  .then(parse)
  .then(mjs.convert)
  .then(console.log)
  .catch(error);
