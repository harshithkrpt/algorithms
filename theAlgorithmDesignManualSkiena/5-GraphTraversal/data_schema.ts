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

export enum Colors {
  UNCOLORED,
  WHITE,
  BLACK,
}

export enum Class {
  TREE,
  BACK,
  FORWARD,
  CROSS,
}

export const processed: boolean[] = [];
export const discovered: boolean[] = [];
export const parent: number[] = [];
export const graph: Graph = {
  degree: [],
  edges: [],
  nvertices: 0,
  nedges: 0,
  directed: false,
};
export const colors: Colors[] = [];
export const entryTime: number[] = [];
export const exitTime: number[] = [];
// Articulation Vertex
export const reachebleAncestor: number[] = [];
export const treeOutDegree: number[] = [];
