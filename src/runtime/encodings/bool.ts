import Value from "./value";
import Fn from "./fn";

export default class Bool implements Value {
  readonly bool: boolean;

  constructor(value: boolean) {
    this.bool = value;
  }

  apply(arg: Value): Value {
    return Fn.from(x => (this.bool ? arg : x), "Bool/apply");
  }

  static from(boolean: boolean) {
    return boolean ? this.true : this.false;
  }

  static true = new Bool(true);
  static false = new Bool(false);
}
