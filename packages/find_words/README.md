# Find Words

This package implements a graph tree to find all possible combinations of letters in a word.

For example, the word "hello" can be graphed like so:

![Graph tree](./static/graph-tree.png?raw=true "Graph tree")

Each node of the tree is a unique* combination of the letters in the word. Some overlap is clearly present, but this traverses all combinations.

A static text file is used to convert a large number of words into a `Set` of `string`.

At each node, a check is made for the inclusion of that particular combination of letters.