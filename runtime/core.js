class Symbol {
  constructor(symbol){
    this.symbol = symbol;
  }

  apply(thisArg, args){
    console.log(`Apply for symbol "${this.symbol}" with`, args);
    return this;
  }
}

export const __to_m_symbol = symbol => new Symbol(symbol);