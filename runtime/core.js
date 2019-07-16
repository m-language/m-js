class Symbol {
  constructor(symbol){
    this.symbol = symbol;
  }

  apply(thisArg, args){
    console.log(`Apply for symbol "${this.symbol}" with`, args);
    return this;
  }
}

const errFunction = () => { throw new Error("todo"); };

export const __jvm_backend = errFunction;
export const __mangle_name = errFunction;
export const __mpm_root = process.env["MPM_ROOT"];

export const __stdout = errFunction;
export const __stderr = errFunction;
export const __stdin = errFunction;

export const __debug = o => { console.log(o); return o };
export const __symbol = errFunction;

export const __file_from_path = errFunction;
export const __file_name = errFunction;
export const __file_name_without_extension = errFunction;
export const __file_child = errFunction;
export const __file_exists_predicate = errFunction;
export const __file_read = errFunction;
export const __file_write = errFunction;
export const __file_directory_predicate = errFunction;
export const __file_child_files = errFunction;
export const __file_copy = errFunction;