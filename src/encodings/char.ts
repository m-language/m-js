import Value from "./value";
import Nat from "./nat";

export default class Char implements Value {
  private readonly char: number;

  constructor(char: number) {
    this.char = char;
  }

  apply(arg: Value): Value {
    return Nat.from(this.char).apply(arg);
  }

  static from(ch: string): Char {
    return new Char(ch.charCodeAt(0));
  }
}
