// O(v+e)
interface Point {
  x: number;
  y: number;
}
class EdgeNode {
  y: number;
  weight: number;
  next: EdgeNode;
  constructor(y: number) {
    this.weight = null;
    this.y = y;
  }
}

class Graph {
  edges: EdgeNode[];
  degree: number[];
  nvertices: number;
  nedges: number;
  directed: boolean;

  constructor(directed: boolean) {
    this.nvertices = 0;
    this.nedges = 0;
    this.directed = directed;
    this.edges = [];
    this.degree = [];
  }

  private insertEdge({ x, y }: Point, directed: boolean) {
    const edgeNode = new EdgeNode(y);
    if (this.edges[x]) edgeNode.next = this.edges[x];
    this.edges[x] = edgeNode;
    this.degree[x]++;
    if (!directed) {
      y = x;
      x = y;
      this.insertEdge({ x, y }, !directed);
    } else {
      this.nedges++;
    }
  }

  readGraph(nvertices: number, edges: Point[]) {
    this.nvertices = nvertices;
    for (let point of edges) {
      this.insertEdge(point, this.directed);
    }
  }

  printGraph() {
    for (let i = 1; i <= this.nvertices; i++) {
      console.log("Vertex : ", i);
      let ptr = this.edges[i];
      while (ptr) {
        console.log(ptr.y);
        ptr = ptr.next;
      }
      console.log("--------------");
    }
  }

  private findPath(parent: number[], end: number) {
    let path = "";
    while (end) {
      path = end + (path ? "->" : "") + path;
      end = parent[end];
    }
    return path;
  }

  bfs(start: number, end: number) {
    if (start === end) {
      return { path: `${start}-${end}` };
    }
    const queue: number[] = [];
    const visited: boolean[] = [];
    const parent: number[] = [];
    queue.unshift(start);
    parent[start] = null;
    while (queue.length) {
      let u = queue.shift();
      visited[u] = true;
      let ptr: EdgeNode = this.edges[u];
      while (ptr) {
        const y = ptr.y;
        if (!visited[y]) {
          queue.push(y);
          visited[y] = true;
          parent[y] = u;
          if (y === end) {
            return this.findPath(parent, end);
          }
        }
        ptr = ptr.next;
      }
    }
  }
}

const graph = new Graph(true);
graph.readGraph(4, [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
  { x: 1, y: 4 },
]);
// graph.printGraph();
console.log(graph.bfs(1, 4));
