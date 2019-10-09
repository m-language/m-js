import Value from "../value";

export default class JSValue implements Value {
  public readonly value: any;

  constructor(value: any) {
    this.value = value;
  }

  apply(_: Value): Value {
    throw new Error(`Cannot invoke a JSValue: ${JSON.stringify(this)}`);
  }
}
