import Value from "./value";
import Fn from "./fn";

export default class Nat implements Value {
  public readonly nat: number;

  protected constructor(n: number) {
    if (n < 0) throw new Error(`${n} is an invalid natural number (< 0)`);
    this.nat = n;
  }

  apply(arg: Value): Value {
    return Fn.from(arg2 => {
      for (let i = 0; i < this.nat; ++i) {
        arg2 = arg.apply(arg2);
      }
      return arg2;
    }, "Nat/apply");
  }

  static from(n: number): Nat {
    return new Nat(n);
  }
}
