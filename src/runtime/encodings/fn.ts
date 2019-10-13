import Value from "./value";

export default class Fn implements Value {
  private readonly fn: (_: Value) => Value;
  public readonly name: string;

  constructor(fn: (_: Value) => Value, name: string) {
    this.fn = fn;
    this.name = name;
  }

  apply(arg: Value): Value {
    return this.fn(arg);
  }

  static fromBinary(fn: (a: Value, b: Value) => Value, name: string): Fn {
    return new Fn(x => new Fn(y => fn(x, y), `${name}_1`), name);
  }

  static from(fn: (a: Value) => Value, name: string): Fn {
    return new Fn(fn, name);
  }
}
