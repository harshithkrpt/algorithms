class Stack {
  constructor() {
    this.array = [];
    this.items = 0;
  }

  push = (item) => {
    this.array[this.items++] = item;
  };

  pop = () => {
    if (this.items > 0) {
      this.items--;
      this.array.pop();
    }
  };

  top = () => {
    return this.array[this.items - 1];
  };

  isEmpty = () => {
    return this.items === 0;
  };
}

const stack = new Stack();
stack.push(10);
console.log(stack.top());
console.log(stack.array);
stack.pop();
stack.pop();
console.log(stack.array);
