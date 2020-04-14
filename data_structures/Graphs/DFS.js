// Depth First Search
const inf = Infinity;
const Stack = require("../Stack/Stack");

const dfs = (G, start, goal) => {
  const stack = new Stack();
  const isVisited = [];
  stack.push(start);
  isVisited[start] = true;

  while (!stack.isEmpty()) {
    console.log("Stack : ", stack.array);
    const item = stack.pop();

    if (item === goal) {
      return true;
    }
    for (let adj = 0; adj < G[item].length; adj++) {
      if (!isVisited[adj] && G[item][adj] === 1) {
        isVisited[adj] = true;
        stack.push(adj);
      }
    }
  }
  return false;
};

// Adjacent Matrices
const adjacent_matrix = [
  [0, 1, 1, 1, inf],
  [1, 0, 1, inf, inf],
  [1, 1, 0, 1, inf],
  [1, inf, 1, 0, inf],
  [inf, inf, inf, inf, 0],
];

console.log(dfs(adjacent_matrix, 0, 4));
