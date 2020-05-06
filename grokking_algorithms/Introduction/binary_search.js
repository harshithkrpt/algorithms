let arr = [1, 2, 3, 4, 5];

const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) {
      return { item: `${item} Found At Index ${mid}` };
    } else if (arr[mid] < item) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return { item: `${item} Not Found` };
};

let LABEL = "TIME";
console.time(LABEL);
for (let i = 1; i <= 5; i++) {
  console.log(binarySearch(arr, i));
}
console.timeEnd(LABEL);

console.time(LABEL);
for (let i = 1; i <= 5; i++) {}
console.timeEnd(LABEL);
