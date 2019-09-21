import Value from "./value";
import List from "./list";
import Char from "./char";

export default class Symbol implements Value {
  private readonly symbol: string;

  constructor(symbol: string) {
    this.symbol = symbol;
  }

  apply(arg: Value): Value {
    return List.fromArray(this.symbol.split("").map(Char.from)).apply(arg);
  }
}
