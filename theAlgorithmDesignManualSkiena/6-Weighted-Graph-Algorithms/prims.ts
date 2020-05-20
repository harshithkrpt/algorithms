/* 
    Prims Ideology - Greedy
    Prims Creates a Minimum Spanning Tree
    Starts from 1 vertex and grows the rest of the tree
    one edge at a time until all vertices are included

    Prims_MST(G)
        Select a Vertex
        while(isNonTreeVerticesAvaliable()):
            Select the Minimum Weight between a tree and non tree verted
            add the selected edge and verted to the tree T prim
*/
import { Graph, EdgeNode } from "./data_schema";
import { readGraph, printGraph, find_path } from "./utils";

// Global
const parent: number[] = [];

// O(mn)
export const prims = (graph: Graph, start: number) => {
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
      if (distance[w] > weight && !inTree[w]) {
        distance[w] = weight;
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

// printGraph(graph);
prims(graph, 1);
// console.log(parent);
