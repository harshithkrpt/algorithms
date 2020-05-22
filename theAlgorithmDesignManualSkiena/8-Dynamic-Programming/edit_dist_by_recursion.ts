enum Options {
  MATCH,
  INSERT,
  DELETE,
}

// 3^N Complexity
const stringCompare = (s: string, t: string, i: number, j: number) => {
  const opt: number[] = []; // Cost of three options
  if (i == 0) return j * indel(" ");
  if (j == 0) return i * indel(" ");

  opt[Options.MATCH] = stringCompare(s, t, i - 1, j - 1) + match(s[i], t[j]);
  opt[Options.INSERT] = stringCompare(s, t, i, j - 1) + indel(t[j]);
  opt[Options.DELETE] = stringCompare(s, t, i - 1, j) + indel(s[i]);

  let lowest_cost = opt[Options.MATCH];

  for (let k = Options.INSERT; k <= Options.DELETE; k++) {
    if (opt[k] < lowest_cost) lowest_cost = opt[k];
  }

  return lowest_cost;
};

function indel(s: string): number {
  return 1;
}

function match(c: string, d: string) {
  if (c === d) return 0;
  else return 1;
}
