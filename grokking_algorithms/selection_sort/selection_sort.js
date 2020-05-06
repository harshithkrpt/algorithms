function findSmall(arr) {
  let smallest_index = 0;
  let smallest = arr[0];
  // return the smallest index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function SelectionSort(arr = []) {
  let newArr = [];
  let initialLength = arr.length;
  for (let i = 0; i < initialLength; i++) {
    let indexToRemove = findSmall(arr);
    // Remove The Element
    newArr.push(...arr.splice(indexToRemove, 1));
  }
  return newArr;
}

console.log(SelectionSort([5, 3, 6, 6, 2, 1]));
