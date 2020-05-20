let finished = false;

interface NC {
  cand: number;
}

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
  n: number,
  c: number[],
  ncandidates: NC
) => {
  const inPerm: boolean[] = [];
  for (let i = 1; i < 10; i++) inPerm[i] = false;
  for (let i = 0; i < k; i++) if (a[i]) inPerm[a[i]] = true;
  ncandidates.cand = 0;
  for (let i = 1; i <= n; i++) {
    if (!inPerm[i]) {
      c[ncandidates.cand] = i;
      ncandidates.cand = ncandidates.cand + 1;
    }
  }
};

const beforeRecursion = (a: number[], k: number, n: number) => {};

const afterRecursion = (a: number[], k: number, n: number) => {};

const generatePermutations = (n: number) => {
  const a: number[] = [];
  backtrack(a, 0, n);
};

generatePermutations(3);
