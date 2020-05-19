// METHOD
const arr: number[] = [];
const chosen: boolean[] = [];
const search = (n) => {
  if (arr.length == n) {
    console.log(arr);
  } else {
    for (let i = 0; i < n; i++) {
      // Skip the Chosen One
      if (chosen[i]) continue;
      chosen[i] = true;
      arr.push(i);
      search(n);
      chosen[i] = false;
      arr.pop();
    }
  }
};

search(3);
