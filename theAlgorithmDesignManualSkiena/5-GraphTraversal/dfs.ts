import {
  Graph,
  Edgenode,
  discovered,
  processed,
  parent,
  reachebleAncestor,
  treeOutDegree,
  entryTime,
  Class,
  exitTime,
} from "./data_schema";

let finished = false;
let time = 0;

/* const processEdge = (x: number, y: number) => {
    // console.log({ x, y });
    if (parent[y] !== x) {
      console.log("Cycle From %d to %d", y, x);
      find_path(y, x, parent);
      finished = true;
    }
  }; */

/*  Articulation Vertex Detection Types

  Root Cut Nodes => If the Root of DFS has 2 or more children then it is a articulation vertex

  Bridge Cut Nodes =>
 
  Parent Cut Nodes =>

  The routine below systematically evaluates each of the three conditions as we back up from the vertex after traversing all outgoing edges.
*/

const processVertexEarly = (v: number) => {
  reachebleAncestor[v] = v;
};

const processVertexLate = (v: number) => {
  // if Vertex is the root
  if (!parent[v]) {
    if (treeOutDegree[v] > 1) console.log("Root Articulation Vertex : %d", v);
    return;
  }

  // if parent of v is the root
  const root = parent[parent[v]];
  if (reachebleAncestor[v] === parent[v] && !root)
    console.log("Parent Articulation Vertex : %d", parent[v]);

  if (reachebleAncestor[v] == v) {
    console.log("Bridge Articulation Vertex : %d", parent[v]);

    // If V is the not a Leaf
    if (treeOutDegree[v] > 0) console.log("Bridge Articulation Vertex : %d", v);
  }

  // If The Reachable vertex of vertex is more than that of parent
  // then change the reachebleAncestor to reachableAncestor[v]
  const time_v = entryTime[reachebleAncestor[v]];
  const time_parent = entryTime[reachebleAncestor[parent[v]]];

  if (time_v < time_parent) {
    reachebleAncestor[parent[v]] = reachebleAncestor[v];
  }
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
  if (cls === Class.TREE) {
    if (!treeOutDegree[x]) {
      treeOutDegree[x] = 1;
    } else {
      treeOutDegree[x] = treeOutDegree[x] + 1;
    }
  }

  /* 
      CONDITION FOR BACK EDGE
      Below parent check makes y is not the parent acutally a back edge 
      in the undirected graph
    */
  if (cls === Class.BACK && parent[x] !== y) {
    /* 
        Condition Below Makes Sure that y is actually an ancestor of x
      */
    if (entryTime[y] < entryTime[reachebleAncestor[x]]) {
      reachebleAncestor[x] = y;
    }
  }
};

export const dfs = (graph: Graph, start: number, end?: number) => {
  let ptr: Edgenode;

  if (finished) return;

  discovered[start] = true;
  time = time + 1;
  entryTime[start] = time;
  processVertexEarly(start);

  ptr = graph.edges[start];
  while (ptr != null) {
    const y = ptr.y;
    if (!discovered[y]) {
      parent[y] = start;
      processEdge(start, y);
      dfs(graph, y);
    } else if (!processed[y] || graph.directed) processEdge(start, y);

    if (finished) return;

    ptr = ptr.next;
  }

  processVertexLate(start);
  time = time + 1;
  exitTime[start] = time;
  processed[start] = true;
};
