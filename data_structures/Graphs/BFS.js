// Breadth First Search
let inf = Infinity;
const Queue = require("../Queue/Queue");

const bfs = (G, root, goal) => {
  let isVisited = [];
  const queue = new Queue();
  isVisited[root] = true;
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    console.log("Queue : ", queue.array);
    let item = queue.dequeue();

    if (item === goal) {
      return true;
    }
    for (let adj = 0; adj < G[item].length; adj++) {
      if (!isVisited[adj] && G[item][adj] === 1) {
        isVisited[adj] = true;
        queue.enqueue(adj);
      }
    }
  }
  return false;
};

const adjacent_matrix = [
  [0, 1, 1, 1, inf],
  [1, 0, 1, inf, inf],
  [1, 1, 0, 1, inf],
  [1, inf, 1, 0, inf],
  [inf, inf, inf, inf, 0],
];

console.log(bfs(adjacent_matrix, 0, 4));
