const fib_dp = (n: number) => {
  const f: number[] = [];
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) f[i] = f[i - 1] + f[i - 2];
  return f[n];
};

const fib_ultimate = (n: number) => {
  let back1 = 0,
    back2 = 1;
  let next;
  if (n == 0) return 0;
  for (let i = 2; i < n; i++) {
    next = back1 + back2;
    back2 = back1;
    back1 = next;
  }
  return back1 + back2;
};
