const binomial_coefficient = (n: number, m: number) => {
  const bc: number[][] = [];
  // Make 0 th Column as 1
  for (let i = 0; i <= n; i++) {
    bc[i] = [];
    bc[i][0] = 1;
  }
  // Making Diagonals as 1
  for (let j = 0; j <= n; j++) bc[j][j] = 1;

  // actuall logic
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) bc[i][j] = bc[i - 1][j - 1] + bc[i - 1][j];
  }

  return bc;
};

console.log(binomial_coefficient(3, 3));
