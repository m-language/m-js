import Value from "./value";
import Fn from "./fn";

export default class Nat implements Value {
  private readonly n: number;

  constructor(n: number) {
    if (n < 0) throw new Error(`${n} is an invalid natural number (< 0)`);
    this.n = n;
  }

  apply(arg: Value): Value {
    return Fn.fromUnary(arg2 => {
      for (let i = 0; i < this.n; ++i) {
        arg2 = arg.apply(arg2);
      }
      return arg2;
    });
  }

  static from(n: number): Nat {
    return new Nat(n);
  }
}
