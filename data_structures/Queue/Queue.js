class Queue {
  constructor() {
    this.array = [];
    this.items = 0;
  }

  enqueue = (item) => {
    this.array.push(item);
    this.items++;
  };

  dequeue = () => {
    if (!this.isEmpty()) {
      this.items--;
      return this.array.shift();
    }
  };

  peek = () => {
    if (!this.isEmpty()) {
      return this.array[0];
    }
  };

  isEmpty = () => {
    return this.items === 0;
  };
}

module.exports = Queue;
