let finished = false;

const backtrack = (a: number[], k: number, input: any) => {
  const c: number[] = [];
  let ncandidates: number;
  if (isASolution(a, k, input)) {
    processSolution(a, k, input);
  } else {
    k = k + 1;
    constructCandidates(a, k, input, c, ncandidates);
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

const processSolution = (a: number[], k: number, input: any) => {};

const isASolution = (a: number[], k: number, input: any): boolean => {
  return true;
};

const constructCandidates = (
  a: number[],
  k: number,
  input: any,
  c: number[],
  ncandidates: number
) => {};
