let finished = false;
let ncandidates: number;

const backtrack = (a: number[], k: number, input: any) => {
  const c: number[] = [];
  if (isASolution(a, k, input)) {
    processSolution(a, k, input);
  } else {
    k = k + 1;
    constructCandidates(a, k, input, c);
    for (let i = 0; i < ncandidates; i++) {
      a[k] = c[i];
      makeMove(a, k, input);
      backtrack(a, k, input);
      unMakeMove(a, k, input);
      if (finished) return;
    }
  }
};

const makeMove = (a: number[], k: number, input: any) => {};

const unMakeMove = (a: number[], k: number, input: any) => {};

const processSolution = (a: number[], k: number, input: any) => {
  let str = "{";
  for (let i = 1; i <= k; i++) if (a[i]) str += ` ${i}`;

  console.log(str + " }");
};

const isASolution = (a: number[], k: number, n: any): boolean => {
  return k === n;
};

const constructCandidates = (
  a: number[],
  k: number,
  input: any,
  c: number[]
) => {
  c[0] = 1;
  c[1] = 0;
  ncandidates = 2;
};

const generateSubsets = (n: number) => {
  const a: number[] = [];
  backtrack(a, 0, n);
};

generateSubsets(3);
