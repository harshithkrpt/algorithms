function isBalancedParenthesis(str: string): boolean {
  const stack = [];
  let i = 0;
  while (i < str.length) {
    console.log(stack);
    if (str[i] === "(") stack.push("(");
    else if (str[i] === ")" && stack[stack.length - 1] === "(") stack.pop();
    else {
      return false;
    }
    i++;
  }

  return !stack.length;
}

console.log(isBalancedParenthesis(")()())"));
