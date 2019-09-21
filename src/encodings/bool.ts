import Value from "./value";
import Fn from "./fn";

export default class Bool implements Value {
  readonly value: boolean;

  constructor(value: boolean) {
    this.value = value;
  }

  apply(arg: Value): Value {
    return Fn.fromUnary(x => (this.value ? arg : x));
  }
}
