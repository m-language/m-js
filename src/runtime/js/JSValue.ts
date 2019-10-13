import Value from "../encodings/value";

export default class JSValue implements Value {
  public readonly value: any;

  constructor(value: any) {
    this.value = value;
  }

  apply(_: Value): Value {
    throw new Error(`Cannot invoke a JSValue: ${JSON.stringify(this)}`);
  }

  static fromBool(bool: boolean) {
    return bool ? JSValue.true : JSValue.false;
  }

  static true = new JSValue(true);
  static false = new JSValue(false);
}
