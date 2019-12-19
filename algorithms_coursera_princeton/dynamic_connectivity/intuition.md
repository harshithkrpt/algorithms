# Intution

## Quick Find

### Data Structure QF

- Integer Array of Size N
- connected objects are given same number and object id is array index value.
- Find : Check if 2 objects have same number.
- Union : Merge Components containing P and Q change entries to an equal number.

### Cost Model

- quick find => N - initialize N - union 1 - find

- quadratic algorithms gets slower as input size increases.

## Quick Union

- Lazy Approach

### Data Structure QU

- Integer array of Size N.
- Intrepretation id[i] is a parent of i
- Root of i is id[id[...id[i]...]]
- no cycles
- Find : Check if P and Q have Same Root.
- Union : merge p and q set id of p's root to the id of q's root.

### Cost Model QU

- quick union => N - initialize N - union N - find

## Defects Quick Find and Union

- union too expensive in quick find
- find too expensive in quick union

## Improvements in Quick Union

### Improvement 1 : Weighting

- avoid tall trees
- keep track of size of each tree
- balance by linking root of smaller trees to root of larger tree.
- always put the smaller tree lower.

- data structure id[] and extra array sz[i] count no of objects in the rooted at i
- find is same
- union is going to change
- running time find takes depth
- depth is lgN.
- union lgN

### Improvement 2 : Path Compression

- set each of examined point to that root.
- running time c(N + Mlg\* N) -> 5

- look at summary in 2.pdf.
