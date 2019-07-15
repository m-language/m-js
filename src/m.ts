

export const toSafeName = (name: string) => {
  let split = name.split("");
  let toSafeChar = char => {
    if(/[a-zA-Z]/.test(char)){
      return char;
    }else{
      return `_${char.charCodeAt(0)}`;
    }
  };
  return "M" + split.map(toSafeChar).join("");
};

export const convert = (parsed: string[]) => {
  let definitions = {};
  parsed.forEach(([, name, body]) => (definitions[toSafeName(name)] = body));
  return {
    definitions
  };
};