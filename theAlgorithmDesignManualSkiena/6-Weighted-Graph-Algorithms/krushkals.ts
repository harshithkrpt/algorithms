/* 
    Krushkals Minimum Spanning Trees
    Krushkals_MST(G)
        put the edges in a priority queue by weight
        count = 0
        while(count < n -1 ) do
            get next edge(v,w)
            if(component(v) != component(w))
                add to Tkrushkals
                merge component(v) and component(w)
*/

import { Graph, EdgeNode, SetUnion } from "./data_schema";
import { readGraph } from "./utils";

// Initialize the set-union function
const setUnionInit = (s: SetUnion, n: number) => {
  for (let i = 1; i <= n; i++) {
    s.p[i] = i;
    s.size[i] = 1;
  }

  s.n = n;
};

// Find the Root
const find = (s: SetUnion, x: number) => {
  if (s.p[x] == x) return x;
  else return find(s, s.p[x]);
};

// unite the components
const unionSet = (s: SetUnion, s1: number, s2: number) => {
  // Find the Roots of the Sets
  const r1 = find(s, s1);
  const r2 = find(s, s2);

  // Already in Same Set
  if (r1 === r2) return;

  if (s.size[r1] >= s.size[r2]) {
    s.size[r1] += s.size[r2];
    s.p[r2] = r1;
  } else {
    s.size[r2] += s.size[r1];
    s.p[r1] = r2;
  }
};

const isSameComponent = (s: SetUnion, s1: number, s2: number): boolean => {
  return find(s, s1) === find(s, s2);
};

const toEdgeArray = (graph: Graph, ep: EdgePair[]) => {
  if (graph.directed) {
    for (let i = 1; i <= graph.nvertices; i++) {
      let ptr: EdgeNode = graph.edges[i];
      while (ptr) {
        ep.push({ x: i, y: ptr.y, weight: ptr.weight });
        ptr = ptr.next;
      }
    }
  } else {
    const hash = {};
    for (let i = 1; i <= graph.nvertices; i++) {
      let ptr: EdgeNode = graph.edges[i];
      while (ptr) {
        if (!hash[`${i},${ptr.y}`]) {
          hash[`${i},${ptr.y}`] = true;
          hash[`${ptr.y},${i}`] = true;
          ep.push({ x: i, y: ptr.y, weight: ptr.weight });
        }
        ptr = ptr.next;
      }
    }
    console.log(hash);
  }
};

interface EdgePair {
  x: number;
  y: number;
  weight: number;
}

const krushkal = (graph: Graph) => {
  const s: SetUnion = {
    n: null,
    size: [],
    p: [],
  };
  const edgePair: EdgePair[] = [];

  setUnionInit(s, graph.nvertices);

  // to edge array
  toEdgeArray(graph, edgePair);

  edgePair.sort((a, b) => a.weight - b.weight);

  for (let i = 0; i < graph.nedges; i++) {
    if (!isSameComponent(s, edgePair[i].x, edgePair[i].y)) {
      console.log("Edge (%d %d) in MST", edgePair[i].x, edgePair[i].y);
      unionSet(s, edgePair[i].x, edgePair[i].y);
    }
  }
};

const graph: Graph = {
  degree: [],
  edges: [],
  nvertices: 0,
  directed: false,
  nedges: 0,
};

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

krushkal(graph);
