const getRandomPivotIndex = (range) => {
  return Math.floor(Math.random() * range);
};

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIndex = getRandomPivotIndex(arr.length);
  const pivot = arr[pivotIndex];
  const less = arr.filter(
    (item, index) => item <= pivot && index !== pivotIndex
  );
  const greater = arr.filter(
    (item, index) => item > pivot && index !== pivotIndex
  );

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort([2, 2, 2, 2, 2, 1, 1, 1, 3]));
