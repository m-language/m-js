import JSValue from "./JSValue";
import Value from "../value";
import Symbol from "../symbol";
import { Impure } from "../process";
import List, { Nil } from "../list";
import Nat from "../nat";
import Bool from "../bool";

export const jsValueType = (value: JSValue) => new Symbol(typeof value.value);

export const jsValueGetProperty = (value: JSValue, property: Symbol) => new JSValue(value.value[(property as Symbol).symbol]);

export const jsValueSetProperty = (value: JSValue, property: Symbol, newValue: JSValue) => {
  // TODO this is so entirely wrong
  value.value[property.symbol] = (newValue as JSValue).value;
  return new Impure(Nil.instance);
};

export const jsInvokeMethod = (fn: JSValue, thisValue: JSValue, args: List) =>
  new JSValue(fn.value.apply(thisValue.value, Array.from(args.iterator()).map(value => (value as JSValue).value)));

export const jsGlobalThis = new JSValue(globalThis);

export const jsNull = new JSValue(null);

export const jsUndefined = new JSValue(void undefined);

export const jsString = (symbol: Symbol) => new JSValue(symbol.symbol);

export const jsNumber = (natural: Nat) => new JSValue(natural.nat);

export const jsObject = (object: List<List>) =>
  new JSValue(
    Array.from(object.iterator()).reduce((acc: any, x: Value) => {
      const assoc = Array.from((x as List).iterator());
      acc[(assoc[0] as Symbol).symbol] = (assoc[1] as JSValue).value;
      return acc;
    }, {})
  );

export const jsEqualPredicate = (a: JSValue, b: JSValue) => Bool.from(a.value === b.value);

export const jsPolyEqualPredicate = (a: JSValue, b: JSValue) => Bool.from(a.value == b.value);
