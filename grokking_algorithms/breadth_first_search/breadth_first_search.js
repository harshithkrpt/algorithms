const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

// Check For Mango Seller
const isMangoSeller = (name) => {
  return name[name.length - 1] === "m";
};

// Do a Breadth First Search
const bfs = (graph, start) => {
  let queue = [start];
  const visited = {};
  while (queue.length) {
    const name = queue.shift();
    //   Check if Person is Mango Seller and Not Being Searched Already
    if (!visited[name]) {
      if (isMangoSeller(name)) {
        return { isMangeSeller: true, name };
      }
      // else add all neighbours to the queue
      else {
        visited[name] = true;
        queue.push(...graph[name]);
      }
    }
  }
  return { isMangeSeller: false };
};

console.log(bfs(graph, "you"));

// O(V+E)
