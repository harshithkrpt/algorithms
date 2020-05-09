const insertionSort = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
};

const arr: number[] = [2, 3, 4, 1, 65, -100];
insertionSort(arr);
console.log(arr);
