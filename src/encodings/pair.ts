import Value from "./value";

export default class Pair<First extends Value = Value, Second extends Value = Value> implements Value {
  public readonly first: First;
  public readonly second: Second;

  constructor(first: First, second: Second) {
    this.first = first;
    this.second = second;
  }

  apply(arg: Value): Value {
    return arg.apply(this.first).apply(this.second);
  }
}
