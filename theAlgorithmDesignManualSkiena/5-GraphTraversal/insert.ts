import { Edgenode, Graph } from "./data_schema";
export const insertEdge = (
  graph: Graph,
  x: number,
  y: number,
  directed: boolean
) => {
  let ptr: Edgenode = { weight: null, y, next: graph.edges[x] };
  graph.edges[x] = ptr;
  graph.degree[x]++;
  if (directed == false) insertEdge(graph, y, x, true);
  else graph.nedges++;
};
