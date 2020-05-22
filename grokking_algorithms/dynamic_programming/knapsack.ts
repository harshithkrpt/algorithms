// W Capacity
// wt [] and val [] with n items

// Formula
// cell[i][j] = max(cell[i-1][j] , current_item_val + remaining_space_val)

const max = (a, b) => (a > b ? a : b);

const knapsack = (W: number, wt: number[], val: number[], n: number) => {
  const grid: number[][] = [];
  for (let i = 0; i <= n; i++) {
    grid[i] = [];
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (i === 0 || w === 0) {
        grid[i][w] = 0;
      } else if (wt[i - 1] <= w) {
        grid[i][w] = max(
          val[i - 1] + grid[i - 1][w - wt[i - 1]],
          grid[i - 1][w]
        );
      } else {
        grid[i][w] = grid[i - 1][w];
      }
    }
  }

  return grid;
};

console.log(knapsack(4, [4, 3, 1], [3000, 2000, 1500], 3));
