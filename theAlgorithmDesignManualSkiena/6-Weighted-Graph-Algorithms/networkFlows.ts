// TODO UNDERSTAND NETWORK FLOW
// import { bfs } from "../5-GraphTraversal/bfs";
// import { parent, Edgenode } from "../5-GraphTraversal/data_schema";
// import { initializeSearch } from "../5-GraphTraversal/init";

// interface EdgeNode {
//   v: number;
//   capacity: number;
//   flow: number;
//   residual: number;
//   next: EdgeNode;
// }

// export interface Graph {
//   edges: EdgeNode[];
//   degree: number[];
//   nvertices: number;
//   nedges: number;
//   directed: boolean;
// }

// const netflow = (graph: Graph, source: number, sink: number) => {
//   addResudualEdges(graph);

//   initializeSearch();
//   bfs(graph, source);
//   let volume = pathVolume(graph, source, sink, parent);

//   while (volume > 0) {
//     augmentPath(graph, source, sink, parent, volume);
//     initializeSearch();
//     bfs(graph, source);
//     volume = pathVolume(graph, source, sink, parent);
//   }
// };

// const validEdge = (e: edgenode): boolean => e.residual > 0;

// const pathVolume = (
//   graph: Graph,
//   start: number,
//   end: number,
//   parents: number[]
// ): number => {
//   if (parents[end] == -1) return 0;
//   const e = findEdge(graph, parents[end], end);

//   if (start == parents[end]) return e.residual;
//   else return min(pathVolume(graph, start, parent[end], parents), e.residual);
// };

// const min = (a, b) => (a < b ? a : b);

// const findEdge = (graph: Graph, x: number, y: number) => {
//   let p = graph.edges[x];
//   while (p != null) {
//     if (p.v == y) return p;
//     p = p.next;
//   }
//   return null;
// };

// const augmentPath = (
//   g: Graph,
//   start: number,
//   end: number,
//   parents: number[],
//   volume: number
// ) => {
//   if (start == end) return;
//   let e = findEdge(g, parents[end], end);
//   e.flow += volume;
//   e.residual -= volume;
//   e = findEdge(g, end, parents[end]);
//   e.residual += volume;
//   augmentPath(g, start, parents[end], parents, volume);
// };
