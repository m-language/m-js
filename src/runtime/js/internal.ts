import JSValue from "./JSValue";
import Symbol from "../encodings/symbol";
import { Impure } from "../encodings/process";
import { List } from "../encodings/list";
import Nat from "../encodings/nat";
import Bool from "../encodings/bool";
import Pair from "../encodings/pair";
import Value from "../encodings/value";

export const jsValueType = (value: JSValue) => Symbol.from(typeof value.value);

export const jsValueGetProperty = (value: JSValue, property: Symbol) => new JSValue(value.value[(property as Symbol).symbol]);

export const jsValueSetProperty = (value: JSValue, property: Symbol, newValue: JSValue) => {
  // TODO this is so entirely wrong
  value.value[property.symbol] = (newValue as JSValue).value;
  return new Impure(List.nil);
};

export const jsInvokeMethod = (fn: JSValue, thisValue: JSValue, args: List) =>
  new JSValue(fn.value.apply(thisValue.value, Array.from(args.iterator()).map(value => (value as JSValue).value)));

export const jsGlobalThis = new JSValue(globalThis);

export const jsNull = new JSValue(null);

export const jsUndefined = new JSValue(void undefined);

export const jsString = (symbol: Symbol) => new JSValue(symbol.symbol);

export const jsBool = (bool: Bool) => JSValue.fromBool(bool.bool);

export const jsNumber = (natural: Nat) => new JSValue(natural.nat);

export const jsObject = (assocList: List<Pair<Symbol, JSValue>>) =>
  new JSValue(
    Array.from(assocList.iterator()).reduce((resultObject: any, associationPair: Pair<Symbol, JSValue>) => {
      resultObject[associationPair.first.symbol] = associationPair.second;
      return resultObject;
    }, {})
  );

export const jsEqualPredicate = (a: JSValue, b: JSValue) => Bool.from(a.value === b.value);

export const jsPolyEqualPredicate = (a: JSValue, b: JSValue) => Bool.from(a.value == b.value);

/* post process a compiled javascript file (from m) */
export const jsPostProcess = (a: Value) => {
  return a;
};
