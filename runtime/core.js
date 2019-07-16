class Symbol {
  constructor(symbol){
    this.symbol = symbol;
  }

  apply(args){
    console.log(this.symbol);
    return this;
  }
}

export const __to_m_symbol = symbol => new Symbol(symbol);