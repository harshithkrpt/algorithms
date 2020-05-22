// 1.6^n
function fib_r(n: number) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib_r(n - 1) + fib_r(n - 2);
}

console.log(fib_r(4));
