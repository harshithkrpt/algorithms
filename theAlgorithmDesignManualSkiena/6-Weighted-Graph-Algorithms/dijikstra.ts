/* 
    ShortestPath-Dijkstra(G, s, t)
    known = {s}
    for i = 1 to n, dist[i] = ∞
    for each edge (s, v), dist[v] = w(s, v)
    last = s
    while (last  = t)
        select v next , the unknown vertex minimizing dist[v]
        for each edge (v next , x), dist[x] = min[dist[x], dist[v next ] + w(v next , x)]
        last = v next
        known = known ∪ {v next }

        Dijkstra works correctly only on graphs without negative-cost edges.
*/
import { Graph, EdgeNode } from "./data_schema";
import { readGraph, printGraph, find_path } from "./utils";

// Global
const parent: number[] = [];

// O(n^2)
export const dijikstra = (graph: Graph, start: number) => {
  const inTree: boolean[] = [];
  const distance: number[] = [];
  // Initialize Intree,Distance and Path
  for (let i = 1; i <= graph.nvertices; i++) {
    inTree[i] = false;
    distance[i] = Number.MAX_VALUE;
    parent[i] = -1;
  }

  distance[start] = 0;
  let v = start;

  while (!inTree[v]) {
    inTree[v] = true;
    let ptr: EdgeNode = graph.edges[v];

    while (ptr) {
      const w = ptr.y;
      const weight = ptr.weight;
      if (distance[w] > distance[v] + weight) {
        distance[w] = distance[v] + weight;
        parent[w] = v;
      }
      ptr = ptr.next;
    }

    v = 1;
    let dist = Number.MAX_VALUE;
    for (let i = 1; i <= graph.nvertices; i++) {
      if (!inTree[i] && dist > distance[i]) {
        dist = distance[i];
        v = i;
      }
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
  false
);

printGraph(graph);
dijikstra(graph, 1);
console.log(parent);
find_path(1, 5, parent);
