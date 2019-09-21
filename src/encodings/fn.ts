import Value from "./value";

export default class Fn implements Value {
  private readonly fn: (_: Value) => Value;

  constructor(fn: (_: Value) => Value) {
    this.fn = fn;
  }

  apply(arg: Value): Value {
    return this.fn(arg);
  }

  static fromBinary(fn: (a: Value, b: Value) => Value): Fn {
    return new Fn(x => new Fn(y => fn(x, y)));
  }

  static fromUnary(fn: (a: Value) => Value): Fn {
    return new Fn(fn);
  }
}
