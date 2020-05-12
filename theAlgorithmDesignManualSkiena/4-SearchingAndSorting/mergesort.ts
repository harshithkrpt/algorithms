// Merge Sort Can Be Used With Linked List
// Disadvantage is the need of auxiliary buffer

const mergeSort = (arr: number[]): number[] => {
  const sort = (low: number, high: number) => {
    if (low < high) {
      const middle = Math.floor((low + high) / 2);
      sort(low, middle);
      sort(middle + 1, high);
      merge(low, middle, high);
    }
  };

  const merge = (low: number, mid: number, high: number) => {
    const left = arr.slice(low, mid + 1);
    const right = arr.slice(mid + 1, high + 1);

    let track = low;

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        arr[track++] = left.shift();
      } else {
        arr[track++] = right.shift();
      }
    }

    while (left.length) arr[track++] = left.shift();
    while (right.length) arr[track++] = right.shift();
  };

  const low = 0;
  const high = arr.length - 1;
  sort(low, high);

  return arr;
};
