import Value from "./value";
import Pair from "./pair";
import Fn from "./fn";

export class Nil implements List<never> {
  *iterator(): IterableIterator<never> {}

  apply(arg: Value): Value {
    return Fn.from(_ => arg, "Nil/apply");
  }
}

export abstract class List<T extends Value = Value> implements Value {
  abstract apply(arg: Value): Value;

  abstract iterator(): IterableIterator<T>;

  static fromArray<T extends Value = Value>(array: Array<T>) {
    return array.reduceRight((acc: List<T>, x: T) => new Cons(x, acc) as List<T>, List.nil);
  }

  public static nil = new Nil();
}

export class Cons<T extends Value = Value> extends Pair<T, List<T>> implements List<T> {
  *iterator(): IterableIterator<T> {
    yield super.first;
    for (let elem of super.second.iterator()) {
      yield elem;
    }
  }

  apply(arg: Value): Value {
    return super.apply(arg);
  }
}
