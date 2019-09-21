import Value from "./value";

export default abstract class Process implements Value {
  apply(arg: Value): Process {
    return new ThenRunWith(this, arg);
  }

  abstract run(): Value;
}

export class ThenRunWith extends Process {
  readonly process: Process;
  readonly value: Value;

  constructor(process: Process, value: Value) {
    super();
    this.process = process;
    this.value = value;
  }

  run(): Value {
    return (this.value.apply(this.process.run()) as Process).run();
  }
}
