import {
  Edgenode,
  Graph,
  MAXV,
  Point,
  processed,
  discovered,
  parent,
  graph,
} from "./data_schema";
import { insertEdge } from "./insert";

export const initializeSearch = () => {
  for (let i = 1; i <= graph.nvertices; i++) {
    processed[i] = discovered[i] = false;
    parent[i] = -1;
  }
};

export const initializeGraph = (graph: Graph, directed: boolean) => {
  graph.nvertices = 0;
  graph.nedges = 0;
  graph.directed = directed;

  for (let i = 1; i <= MAXV; i++) graph.degree[i] = 0;
  for (let i = 1; i <= MAXV; i++) graph.edges[i] = null;
};

export const readGraph = (
  graph: Graph,
  nvertices: number,
  edges: Point[],
  directed: boolean
) => {
  graph.nvertices = nvertices;
  for (let point of edges) {
    insertEdge(graph, point.x, point.y, directed);
  }
};

export const printGraph = (graph: Graph) => {
  let ptr: Edgenode;

  for (let i = 1; i <= graph.nvertices; i++) {
    console.log("%d", i);
    console.log("-----------");
    ptr = graph.edges[i];
    while (ptr != null) {
      console.log("%d", ptr.y);
      ptr = ptr.next;
    }
    console.log("---------");
  }
};

export const find_path = (start: number, end: number, parents: number[]) => {
  if (start === end || end === -1) console.log(" %d", start);
  else {
    find_path(start, parents[end], parents);
    console.log(" %d", end);
  }
};

// Process Vertex Early and Process Vertex For Articulation Vertex

// TODO READ MORE ON TOPOLOGICAL SORT And Strongly Connected Components
