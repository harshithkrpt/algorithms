// Dijikstra Algorithm Only Works with Directed Acyclic Graph
// Minimizing The Cost
// Dijikstra Does not Work With Negative Weights

const dijikstra = (graph, start, fin) => {
  const costs = {};
  const parents = {};
  const processed = {};

  //  Initilizing The Cost and Parents for Path

  for (let node in graph) {
    if (node in graph[start]) {
      parents[node] = start;
      costs[node] = graph[start][node];
    } else if (node !== start) {
      parents[node] = null;
      costs[node] = Infinity;
    }
  }

  const findLowestCostNode = () => {
    let lowestCost = Infinity;
    let lowestCostNode = null;
    for (let node in costs) {
      const cost = costs[node];
      if (cost < lowestCost && !processed[node]) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }

    return lowestCostNode;
  };

  let node = findLowestCostNode();
  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];
    for (let n in neighbors) {
      new_cost = cost + neighbors[n];
      if (costs[n] > new_cost) {
        costs[n] = new_cost;
        parents[n] = node;
      }
    }
    // Added This Node As Visited
    processed[node] = true;
    node = findLowestCostNode();
  }

  let path = fin;
  let findParent = fin;
  while (start !== findParent) {
    findParent = parents[findParent];
    path = `${path} -> ${findParent}`;
  }
  return { length: costs[fin], path };
};

const graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {},
};

console.log(dijikstra(graph, "start", "fin"));
