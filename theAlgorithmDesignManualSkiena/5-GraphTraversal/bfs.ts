import {
  Graph,
  Edgenode,
  discovered,
  processed,
  colors,
  parent,
  Colors,
} from "./data_schema";
import { complement } from "./utils";
import { find_path, initializeSearch } from "./init";

// Global
let bipartite: boolean;

const processVertexEarly = (v: number) => {
  console.log("Processed Vertex %d \n", v);
};

const processVertexLate = (v: number) => {};

const processEdge = (x: number, y: number) => {
  console.log("Processed Edge (%d %d)\n", x, y);

  // Code For Two Color
  if (colors[x] === colors[y]) {
    bipartite = false;
    console.log("Warning: not bipartite due to (%d,%d)\n", x, y);
  }

  colors[y] = complement(colors[x]);
};

export const bfs = (graph: Graph, start: number, end?: number) => {
  const queue: number[] = [];

  let ptr: Edgenode;

  queue.push(start);
  discovered[start] = true;
  while (queue.length) {
    const vertex = queue.shift();
    processVertexEarly(vertex);
    processed[vertex] = true;
    ptr = graph.edges[vertex];
    while (ptr) {
      const y = ptr.y;
      if (!processed[y] || graph.directed) processEdge(vertex, y);
      if (!discovered[y]) {
        queue.push(y);
        discovered[y] = true;
        parent[y] = vertex;
      }
      ptr = ptr.next;
    }
    processVertexLate(vertex);
  }
  if (end) find_path(start, end, parent);
};

// Applications

const connected_components = (graph: Graph) => {
  let c: number = 0;

  initializeSearch();

  for (let i = 0; i < graph.nvertices; i++)
    if (!discovered[i]) {
      c = c + 1;
      console.log("Component %d", c);
      bfs(graph, i);
    }
};

const twoColor = (graph: Graph) => {
  for (let i = 1; i <= graph.nvertices; i++) colors[i] = Colors.UNCOLORED;

  bipartite = true;

  initializeSearch();

  for (let i = 1; i <= graph.nvertices; i++)
    if (!discovered[i]) {
      colors[i] = Colors.WHITE;
      bfs(graph, i);
    }
};
