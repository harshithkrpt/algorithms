import { Graph, EdgeNode, Point } from "./data_schema";
const MAXV = 1000;
export const initializeGraph = (graph: Graph, directed: boolean) => {
  graph.nvertices = 0;
  graph.nedges = 0;
  graph.directed = directed;

  for (let i = 1; i <= MAXV; i++) graph.degree[i] = 0;
  for (let i = 1; i <= MAXV; i++) graph.edges[i] = null;
};

export const insertEdge = (
  graph: Graph,
  x: number,
  y: number,
  weight: number,
  directed: boolean
) => {
  let ptr: EdgeNode = { weight, y, next: graph.edges[x] };
  graph.edges[x] = ptr;
  if (graph.degree[x]) {
    graph.degree[x]++;
  } else graph.degree[x] = 1;

  if (directed == false) insertEdge(graph, y, x, weight, true);
  else graph.nedges++;
};

export const readGraph = (
  graph: Graph,
  nvertices: number,
  edges: Point[],
  directed: boolean
) => {
  graph.nvertices = nvertices;
  graph.directed = directed;
  for (let point of edges) {
    insertEdge(graph, point.x, point.y, point.weight, directed);
  }
};

export const printGraph = (graph: Graph) => {
  let ptr: EdgeNode;

  for (let i = 1; i <= graph.nvertices; i++) {
    console.log("Node %d", i);
    ptr = graph.edges[i];
    while (ptr != null) {
      console.log("%d -- %d", i, ptr.y);
      ptr = ptr.next;
    }
    console.log("--------");
  }
};

export const find_path = (start: number, end: number, parents: number[]) => {
  if (start === end || end === -1) console.log(" %d", start);
  else {
    find_path(start, parents[end], parents);
    console.log(" %d", end);
  }
};
