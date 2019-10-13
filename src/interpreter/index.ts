import parse from "../internal/parse";
import Value from "../runtime/encodings/value";
import Nat from "../runtime/encodings/nat";
import Process from "../runtime/encodings/process";

/* Access to global variables, present on both web and node platforms */
/* TODO make sure this cant be changed */
export const globals = this;

export type Env = (symbol: string) => Value | undefined | null;

export const composeEnv = (env: Env, elseEnv: Env): Env => (symbol: string) => env(symbol) || elseEnv(symbol);
export const mapToEnv = (map: { [x: string]: Value | undefined | null }): Env => (symbol: string) => map[symbol];
export const envOf = (...keys: Array<[string, Value | undefined | null]>): Env => mapToEnv(Object.fromEntries(keys));
export const withSymbol = (env: Env, symbol: string, value: Value) => composeEnv(envOf([symbol, value]), env);

export const formToValue = (form: any, env: Env): Value => {
  return Nat.from(0);
};

export const evalTopLevelForm = (form: Array<any>, env: Env): Env => {
  if (form.length < 3 || form[0] !== "def" || typeof form[1] !== "string") {
    throw new Error(`invalid top level form ${form}`);
  }
  return withSymbol(env, form[1], formToValue(form[2], env));
};

export const envForSource = (source: string, env: Env): Env => {
  return parse(source).reduce((env: Env, form: any) => evalTopLevelForm(form, env), env);
};

export const runProgram = (source: string, baseEnv: Env) => {
  const env = envForSource(source, baseEnv);
  console.log(env(""));
  (env("") as Process).run();
};
