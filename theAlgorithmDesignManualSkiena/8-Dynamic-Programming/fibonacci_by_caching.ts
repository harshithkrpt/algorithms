const UNKNOWN = -1;
const f: number[] = [];

function fib_c(n: number): number {
  if (f[n] === UNKNOWN) {
    f[n] = fib_c(n - 1) + fib_c(n - 2);
  }

  return f[n];
}

const fib_driver = (n: number) => {
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) f[i] = UNKNOWN;
  return fib_c(n);
};

console.log(fib_driver(100));
