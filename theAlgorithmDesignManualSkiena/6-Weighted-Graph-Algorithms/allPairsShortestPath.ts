// Floyd Warshall Algotithm

interface AdjMatrix {
  weight: number[][];
  nvertices: number;
}

// Analysis O(n^3)

// It a one of the important graph algorithms that will work better on
// adjacent matrix than that of adjacent list

const floyd = (a: AdjMatrix) => {
  for (let k = 1; k <= a.nvertices; k++) {
    for (let i = 1; i <= a.nvertices; i++) {
      for (let j = 1; j <= a.nvertices; j++) {
        const through_k = a.weight[i][k] + a.weight[k][j];
        if (through_k < a.weight[i][j]) {
          a.weight[i][j] = through_k;
        }
      }
    }
  }
};

// Application 1

// Transitive Closure
