# Graph Traversal

- undirected vs directed
- weighted vs unweighted
- simple vs non-simple
- sparse vs dense -> dense graph has n^2 no. of edges
- cyclic vs acyclic -> trees are connected , acyclic and undirected graph
- embedded vs topological -> embedded if edges are straight

## Datastructures for graphs

- adjacent matrix and adjacent list

- Faster to test if (x, y) is in graph? adjacent matrix
- Faster to find the degree of a vertex? adjacent list
- Less memory on small graphs? adjacent matrices (m+n) vs n^2
- Less memory on big graphs? adjacent matrices (a small win)
- Edge insertion or deletion? adjacency matrices O(1) vs. O(d)
- Faster to traverse the graph? adjacency lists Θ(m + n) vs. Θ(n 2 )
- Better for most problems? adjacency lists

## Key Takeaway

- Adjacency lists are the right data structure for most
  applications of graphs.

- Breadth-first and depth-first searches provide mechanisms
  to visit each edge and vertex of the graph. They prove the basis of most simple,
  efficient graph algorithms.

- DFS organizes vertices by entry/exit times, and edges
  into tree and back edges. This organization is what gives DFS its real power.

## Application of DFS

- finding cycles

- articulation vertices

## Notes

- what is articulation vertex ?

a single vertex whose deletion disconnects a connectivity of graph

- finding articulation point is easy with dfs with 2 rules

  1. root is articulated if it hash atleast 2 children
  2. non root vertex child has to have a back edge to ancestor of non root vertex
