export interface EdgeNode {
  y: number;
  weight: number;
  next: EdgeNode;
}

export interface Graph {
  edges: EdgeNode[];
  degree: number[];
  nvertices: number;
  nedges: number;
  directed: boolean;
}

export interface Point {
  x: number;
  y: number;
  weight: number;
}

export interface SetUnion {
  p: number[];
  size: number[];
  n: number;
}
