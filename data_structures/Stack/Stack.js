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
      return this.array.pop();
    }
  };

  top = () => {
    return this.array[this.items - 1];
  };

  isEmpty = () => {
    return this.items === 0;
  };
}

module.exports = Stack;
