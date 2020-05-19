/* Given an array of n numbers, our task is to calculate the maximum subarray sum, i.e., the largest possible sum of a sequence of consecutive values in the
array 2 . The problem is interesting when there may be negative values in the
array. For example, in the array
 */

// Intution track of sum and if current element + sum gives more result than current element than add the element
// calculate the max sum

const arr = [-1, 2, 4, -3, 5, 2, -5, 2];

const max = (a: number, b: number): number => (a > b ? a : b);

const maxSizeSubArr = (arr: number[]): number => {
  let sum = 0;
  let best = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = max(arr[i], sum + arr[i]);
    best = max(best, sum);
  }

  return best;
};

console.log(maxSizeSubArr(arr));
