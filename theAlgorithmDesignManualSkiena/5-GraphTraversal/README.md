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
