export const MAXV = 1000;

export interface Edgenode {
  y: number;
  weight: number;
  next: Edgenode;
}

export interface Graph {
  edges: Edgenode[];
  degree: number[];
  nvertices: number;
  nedges: number;
  directed: boolean;
}

export interface Point {
  x: number;
  y: number;
}
