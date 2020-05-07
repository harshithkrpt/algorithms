// Passed
const sum = (arr) => {
  if (arr.length === 0) return 0;
  return arr.shift() + sum(arr);
};

// Passed
const noOfItems = (arr) => {
  if (arr.length === 0) return 0;
  arr.shift();
  return 1 + noOfItems(arr);
};

// Maximun Number In a List
// Works Only For Numbers between 1 to Infinity
const MaxNumber = (arr, max = -1) => {
  if (arr.length === 0) return max;
  arr[0] > max ? (max = arr.shift()) : arr.shift();
  return MaxNumber(arr, max);
};

// Binary Search
const binarySearch = (arr, item, low = 0, high = arr.length) => {
  const mid = Math.floor((low + high) / 2);
  if (low >= high) return { status: false, foundAt: null };
  if (item === arr[mid]) return { status: true, foundAt: mid };
  else if (item > arr[mid]) {
    return binarySearch(arr, item, mid + 1, high);
  } else {
    return binarySearch(arr, item, low, mid);
  }
};

for (let i = 0; i <= 5; i++) console.log(binarySearch([1, 2, 3, 4, 5], i));
