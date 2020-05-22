const max = (a, b) => (a > b ? a : b);

const lcs = (a: string, b: string) => {
  const L: number[][] = [];

  for (let i = 0; i <= a.length; i++) {
    L[i] = [];
  }

  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (i === 0 || j === 0) {
        L[i][j] = 0;
      } else if (a[i - 1] === b[j - 1]) {
        L[i][j] = L[i - 1][j - 1] + 1;
      } else {
        L[i][j] = max(L[i - 1][j], L[i][j - 1]);
      }
    }
  }

  return L[a.length][b.length];
};

console.log(lcs("AGGTAB", "GXTXAYB"));
