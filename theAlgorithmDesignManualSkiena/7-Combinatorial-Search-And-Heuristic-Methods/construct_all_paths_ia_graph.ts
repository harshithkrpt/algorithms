import { Graph, EdgeNode } from "../6-Weighted-Graph-Algorithms/data_schema";
import { readGraph } from "../6-Weighted-Graph-Algorithms/utils";

let finished = false;
let solutionCount = 0;

interface NC {
  cand: number;
}

const graph: Graph = {
  degree: [],
  directed: false,
  edges: [],
  nedges: 0,
  nvertices: 0,
};

const backtrack = (a: number[], k: number, n: number) => {
  const c: number[] = [];
  const ncandidates = { cand: 0 };
  if (isASolution(a, k, n)) {
    processSolution(a, k, n);
  } else {
    k = k + 1;
    constructCandidates(a, k, n, c, ncandidates);
    for (let i = 0; i < ncandidates.cand; i++) {
      a[k] = c[i];
      beforeRecursion(a, k, n);
      backtrack(a, k, n);
      afterRecursion(a, k, n);
      if (finished) return;
    }
  }
};

const isASolution = (a: number[], k: number, n: number) => {
  return a[k] == n;
};

const processSolution = (a: number[], k: number, n: number) => {
  solutionCount++;
};

const constructCandidates = (
  a: number[],
  k: number,
  n: number,
  c: number[],
  ncandidates: NC
) => {
  const inSol: boolean[] = [];
  let en: EdgeNode;
  for (let i = 1; i < 20; i++) inSol[i] = false;
  for (let i = 1; i < k; i++) if (a[i]) inSol[a[i]] = true;
  // Always Start From Vertex 1
  if (k == 1) {
    c[0] = 1;
    ncandidates.cand = 1;
  } else {
    ncandidates.cand = 0;
    const last = a[k - 1];
    let p = graph.edges[last];
    while (p) {
      if (!inSol[p.y]) {
        c[ncandidates.cand] = p.y;
        ncandidates.cand = ncandidates.cand + 1;
      }
      p = p.next;
    }
  }
};

const beforeRecursion = (a: number[], k: number, n: number) => {};

const afterRecursion = (a: number[], k: number, n: number) => {};

readGraph(
  graph,
  6,
  [
    {
      x: 1,
      y: 2,
      weight: 2,
    },
    {
      x: 1,
      y: 3,
      weight: 11,
    },
    {
      x: 1,
      y: 4,
      weight: 1,
    },
    {
      x: 2,
      y: 4,
      weight: 9,
    },
    {
      x: 2,
      y: 5,
      weight: 10,
    },
    {
      x: 3,
      y: 6,
      weight: 20,
    },
    {
      x: 4,
      y: 5,
      weight: 3,
    },
    {
      x: 4,
      y: 6,
      weight: 1,
    },
  ],
  true
);
