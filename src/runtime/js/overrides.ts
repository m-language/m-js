import Fn from "../encodings/fn";
import Value from "../encodings/value";
import { Cons, List } from "../encodings/list";
import Symbol from "../encodings/symbol";
import Bool from "../encodings/bool";

export const normalize = (id: string) => {
  const normal =
    "m_" +
    id
      .split("")
      .flatMap(c => {
        if (/[a-z_]/.test(c)) {
          return [c];
        } else {
          return ["$", ...c.split("").map((x, i) => c.charCodeAt(i))];
        }
      })
      .join("");
  if (normal === "") {
    return "$$";
  } else {
    return normal;
  }
};

export const intentionallyUndefined = (id: string) =>
  Fn.from(_ => {
    throw new Error(`top-level value ${id} is intentionally undefined`);
  }, "intentionallyUndefined");

const notDefined = (...args: string[]) => {
  return Object.fromEntries(args.map(x => [x, intentionallyUndefined(x)]));
};

export default Object.fromEntries(
  Object.entries({
    cons: Fn.fromBinary((car, cdr) => new Cons(car, cdr as List<Value>), "cons"),
    car: Fn.from((cons: Value) => (cons as Cons).first, "car"),
    cdr: Fn.from((cons: Value) => (cons as Cons).second, "cdr"),
    normalize: Fn.from(x => Symbol.from(normalize((x as Symbol).symbol)), "normalize"),
    nil: List.nil,
    "nil?": Fn.from(x => Bool.from(x === List.nil), "nil?"),
    debug: Fn.from(x => {
      console.log(x);
      return x;
    }, "debug"),
    ...notDefined(
      "jvm-backend",
      "jvm-backend'",
      "file.from-path",
      "file.child",
      "file.exists?",
      "file.local-file",
      "file.name",
      "file.name-without-extension",
      "file.read",
      "file.write",
      "file.directory?",
      "file.child-files",
      "file.copy",
      "stdout",
      "stdin",
      "stderr",
      "ostream.write",
      "istream.read"
    )
  }).map(([key, value]) => [normalize(key), value])
);
