import Symbol from "./encodings/symbol";
import Fn from "./encodings/fn";
import Value from "./encodings/value";
import overrides from "./js/overrides";
import "core-js/stable";

export const mCall = (fn: Fn, arg: Value) => {
  if (fn === undefined) {
    throw new Error(`function undefined, applied to ${JSON.stringify(arg)}`);
  }
  return fn.apply(arg);
};

export const createMFunction = (x: any) => Fn.from(x, "[anon]");
export const createMSymbol = Symbol.from;
export const definitions = overrides;

export const getTopLevelDefinition = (id: string) => (id in definitions ? (definitions as any)[id] : undefined);
