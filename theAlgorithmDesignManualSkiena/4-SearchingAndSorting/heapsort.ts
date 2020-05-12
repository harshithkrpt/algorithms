class Heap {
  private q: number[];
  private n: number;

  constructor(values: number[]) {
    // Approach 1
    // this.n = 0;
    this.q = [];
    // values.forEach((i) => this.insert(i));

    // Approach 2 (Faster)  this approach is linear
    this.n = values.length;
    values.forEach((i, index) => {
      this.q[index + 1] = i;
    });
    for (let i = this.n; i >= 1; i--) this.bubbleDown(i);
  }

  private swap(num1: number, num2: number): void {
    let temp = this.q[num1];
    this.q[num1] = this.q[num2];
    this.q[num2] = temp;
  }

  private childElement(n: number): number {
    return 2 * n;
  }

  private parentElement(n: number): number {
    if (n == 1) return -1;
    else return Math.floor(n / 2);
  }

  private bubbleUp(num: number) {
    const parentIndex = this.parentElement(num);

    if (parentIndex == -1) return;

    if (this.q[parentIndex] > this.q[num]) {
      this.swap(parentIndex, num);
      this.bubbleUp(parentIndex);
    }
  }

  private bubbleDown(num: number) {
    let child_index = this.childElement(num);
    let min_index = num;
    if (child_index <= this.n && this.q[child_index] < this.q[num]) {
      min_index = child_index;
    }

    if (
      child_index + 1 <= this.n &&
      this.q[child_index + 1] < this.q[min_index]
    ) {
      min_index = child_index + 1;
    }

    if (min_index !== num) {
      this.swap(min_index, num);
      this.bubbleDown(min_index);
    }
  }

  insert(value: number): void {
    this.n = this.n + 1;
    this.q[this.n] = value;
    this.bubbleUp(this.n);
  }

  extractMin(): number {
    let min: number = -1;

    if (this.n <= 0) console.log("Warning Empty Priority Queue. \n");
    else {
      min = this.q[1];
      this.q[1] = this.q[this.n];
      this.n = this.n - 1;
      this.bubbleDown(1);
    }

    return min;
  }

  sort(): number[] {
    const sortedArr: number[] = [];
    const n = this.n;
    for (let i = 1; i <= n; i++) {
      sortedArr[i] = this.extractMin();
    }
    return sortedArr;
  }

  // i : root A Solution that Complexity is O(k) to find the kth(count) element that is less than x
  heap_compare(i: number, count: number, x: number) {
    // Edge Case Return if kth smallest element is found or when children overflows
    if (count <= 0 || i > this.n) return count;

    // check if root is smaller than x than
    // Recursively call the elements to its left sub-tree after to the right sub tree
    if (this.q[i] < x) {
      count = this.heap_compare(this.childElement(i), count - 1, x);
      count = this.heap_compare(this.childElement(i) + 1, count, x);
    }

    return count;
  }
}

const heap = new Heap([22, 1, 32, 26, 53, 12]);
// console.log(heap.sort());
if (!heap.heap_compare(1, 5, 45)) {
  console.log("Smallest Term Exists");
} else {
  console.log("Opposite of If");
}
