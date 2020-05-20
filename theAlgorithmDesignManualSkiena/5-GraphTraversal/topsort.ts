import {
  Class,
  processed,
  discovered,
  parent,
  entryTime,
  Graph,
} from "./data_schema";
import { dfs } from "./dfs";

const queue = [];

const processVertexLate = (v: number) => {
  queue.push(v);
};

const edgeClassification = (x: number, y: number): Class => {
  if (parent[y] === x) return Class.TREE;

  if (discovered[y] && !processed[y]) return Class.BACK;

  if (processed[y] && entryTime[y] > entryTime[x]) return Class.FORWARD;

  if (processed[y] && entryTime[y] < entryTime[x]) return Class.CROSS;

  console.log("Warning: unclassified edge (%d,%d)\n", x, y);
};

const processEdge = (x: number, y: number) => {
  const cls = edgeClassification(x, y);

  if (cls === Class.BACK)
    console.log("Warning: directed cycle found, not a DAG\n");
};

const topSort = (graph: Graph) => {
  for (let i = 0; i < graph.nvertices; i++) if (!discovered[i]) dfs(graph, i);
};
