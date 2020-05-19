import { Edgenode, Graph, MAXV, Point } from "./data_schema";

enum Colors {
  UNCOLORED,
  WHITE,
  BLACK,
}

// GLOBALS
const processed: boolean[] = [];
const discovered: boolean[] = [];
const parent: number[] = [];
const graph: Graph = {
  degree: [],
  edges: [],
  nvertices: 0,
  nedges: 0,
  directed: false,
};
let bipartite: boolean;
const colors: Colors[] = [];
let finished: boolean = false;
let time: number = 0;
const entryTime: number[] = [];
const exitTime: number[] = [];

const initializeGraph = (graph: Graph, directed: boolean) => {
  graph.nvertices = 0;
  graph.nedges = 0;
  graph.directed = directed;

  for (let i = 1; i <= MAXV; i++) graph.degree[i] = 0;
  for (let i = 1; i <= MAXV; i++) graph.edges[i] = null;
};

const readGraph = (
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

const insertEdge = (graph: Graph, x: number, y: number, directed: boolean) => {
  let ptr: Edgenode = { weight: null, y, next: graph.edges[x] };
  graph.edges[x] = ptr;
  graph.degree[x]++;
  if (directed == false) insertEdge(graph, y, x, true);
  else graph.nedges++;
};

const printGraph = (graph: Graph) => {
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

// Process Vertex SubRoutines
const processVertexLate = (v: number) => {};
const processVertexEarly = (v: number) => {
  console.log("Processed Vertex %d \n", v);
};

const complement = (color: Colors) =>
  color === Colors.BLACK ? Colors.WHITE : Colors.BLACK;

// BFS
/*   
const processEdge = (x: number, y: number) => {
  console.log("Processed Edge (%d %d)\n", x, y);

  // Code For Two Color
  if (colors[x] === colors[y]) {
    bipartite = false;
    console.log("Warning: not bipartite due to (%d,%d)\n", x, y);
  }

  colors[y] = complement(colors[x]);
}; */

// DFS
const processEdge = (x: number, y: number) => {
  // console.log({ x, y });
  if (parent[y] !== x) {
    console.log("Cycle From %d to %d", y, x);
    find_path(y, x, parent);
    finished = true;
  }
};

const initializeSearch = () => {
  for (let i = 1; i <= graph.nvertices; i++) {
    processed[i] = discovered[i] = false;
    parent[i] = -1;
  }
};

// BREADTH FIRST SEARCH
const bfs = (graph: Graph, start: number, end?: number) => {
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

const find_path = (start: number, end: number, parents: number[]) => {
  if (start === end || end === -1) console.log(" %d", start);
  else {
    find_path(start, parents[end], parents);
    console.log(" %d", end);
  }
};

// Application 1 of Breadth First Search
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

// Application 2 Two Coloring Graphs
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

// DEPTH FIRST SEARCH

const dfs = (graph: Graph, start: number, end?: number) => {
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

// Execution
readGraph(
  graph,
  5,
  [
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 },
    { x: 1, y: 6 },
  ],
  false
);

// printGraph(graph);
// bfs(graph, 1, 5);

// App1
// connected_components(graph);

// App2
// twoColor(graph);
// console.log(colors);

dfs(graph, 1);
console.log({ entryTime, exitTime });
console.log(parent);
