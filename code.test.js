const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');


// Testing the case of an empty array

assert(JSON.stringify(dijkstra([], 0)) == JSON.stringify([]));

var test1 = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

// Testing the case of a disconnected graph
// Should return an array with every length at infinity except the start node

assert(JSON.stringify(dijkstra(test1, 0)) == JSON.stringify([0, Infinity, Infinity]));

var disconnected = [
    [0,0,0],
    [0,3,5],
    [0,2,4]
];

// Testing the case of a disconnected node, but there's still a cycle
// Result changes depending on start node (obviously)
// Starting at disconnected node has every other node be infinity
// Otherwise it is the only infinity (assuming its the only disconnected node)

assert(JSON.stringify(dijkstra(disconnected, 0)) == JSON.stringify([0, Infinity, Infinity]));
assert(JSON.stringify(dijkstra(disconnected, 1)) == JSON.stringify([Infinity, 0, 5]));

var treeLike = [
    [0,3,5,0],
    [0,0,4,8],
    [0,0,0,10],
    [0,0,0,0]
];

// Testing a case where the graph is more similar to a tree

assert(JSON.stringify(dijkstra(treeLike, 0)) == JSON.stringify([0, 3, 5, 11]));

var cycles = [
    [5,1,0],
    [2,1,3],
    [7,6,3]
];

// Testing a case where there are cycles within the graph

assert(JSON.stringify(dijkstra(cycles, 0)) == JSON.stringify([0, 1, 4]));
assert(JSON.stringify(dijkstra(cycles, 1)) == JSON.stringify([2, 0, 3]));
assert(JSON.stringify(dijkstra(cycles, 2)) == JSON.stringify([7, 6, 0]));
