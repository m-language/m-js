import Value from "./value";
import Pair from "./pair";
import Fn from "./fn";

export default abstract class List implements Value {
  abstract apply(arg: Value): Value;
  abstract toArray(): Array<Value>;

  static fromArray(array: Array<Value>) {
    return array.reduceRight((acc: List, x: Value) => new Cons(x, acc), new NIL());
  }
}

export class Cons extends Pair<Value, List> implements List {
  toArray(): Array<Value> {
    return [super.first, ...super.second.toArray()];
  }

  apply(arg: Value): Value {
    return super.apply(arg);
  }
}

export class NIL implements List {
  toArray(): Value[] {
    return [];
  }

  apply(arg: Value): Value {
    return Fn.fromUnary(_ => arg);
  }

  static readonly instance = new NIL();
}
