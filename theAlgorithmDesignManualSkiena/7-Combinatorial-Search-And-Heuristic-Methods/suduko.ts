const DIMENSIONS = 9;
const NCELLS = DIMENSIONS * DIMENSIONS;

interface Point {
  x: number;
  y: number;
}

interface boardtype {
  m: number[][];
  freecount: number;
  move: Point[];
}

interface NC {
  cand: number;
}

let finished = false;

const backtrack = (a: number[], k: number, input: any) => {
  const c: number[] = [];
  let ncandidates: NC = { cand: 0 };

  if (isSolution(a, k, input)) {
    processSolution(a, k, input);
  } else {
    k = k + 1;
    constructCandidate(a, k, input, c, ncandidates);
    for (let i = 0; i < ncandidates.cand; i++) {
      a[k] = c[i];
      beforeRecursion(a, k, input);
      backtrack(a, k, input);
      afterRecursion(a, k, input);
      if (finished) return;
    }
  }
};

const isSolution = (a: number[], k: number, n: number) => {
  return k == n;
};

const processSolution = (a: number[], k: number, n: number) => {
  let str = "{ ";
  for (let i = 1; i <= k; i++) str += ` ${a[i]}`;
  console.log(str + " }");
};

const constructCandidate = (
  a: number[],
  k: number,
  n: any,
  c: number[],
  ncandidates: NC
) => {};

const beforeRecursion = (a: number[], k: number, n: number) => {};

const afterRecursion = (a: number[], k: number, n: number) => {};
