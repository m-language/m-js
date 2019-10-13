export default interface Value {
  apply(arg: Value): Value;
}
