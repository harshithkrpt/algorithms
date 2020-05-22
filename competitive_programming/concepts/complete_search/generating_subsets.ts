// Method 1
const subset = [];
const search = (k: number, n: number) => {
  if (k === n) {
    return;
  } else {
    search(k + 1, n);
    subset.push(k);
    search(k + 1, n);
    subset.pop();
  }
};

search(0, 3);
let n = 4;
// Method 2
for (let b = 0; b < 1 << n; b++) {
  const subset: number[] = [];
  for (let i = 0; i < n; i++) {
    if (b & (1 << i)) subset.push(i);
  }
  //   console.log(subset);
}
