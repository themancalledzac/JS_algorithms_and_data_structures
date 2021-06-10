// BIG O

// ----- |V| - number of vertices
// ----- |E| - number of edges

// Operation----------Adjacenty List----------Adjacency Matrix
// -----------------------------------------------------------
// Add Vertex---------O(1)--------------------O(|V^2|)
// Add Edge-----------O(1)--------------------O(1)
// Remove Vertex------O(|V|+|E|)--------------O(|V^2|)
// Remove Edge--------O(|E|)------------------O(1)
// Query--------------O(|V|+|E|)--------------O(1)
// Storage------------O(|V|+|E|)--------------O(|V^2|)

// Adjacency List -
// ----- Can take up less space ( in sparse graphs)
// ----- Faster to iterate over all edges
// ----- Can be slower to lookup specific edge

// Adjacency Matrix
// ----- Takes up more space (in sparse graphs)
// ----- Slower to iterate over all edges
// ----- Faster to lookup specific edge

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vert1, vert2) {
    if (!vert1 || !vert2) return false;
    // find in adjacencyList the key of vert1 and push vert2 to the array
    this.adjacencyList[vert1].push(vert2);
    // find in adjacencyList the key of vert2 and push vert1 to the array
    this.adjacencyList[vert2].push(vert1);
  }
  removeEdge(vert1, vert2) {
    if (!vert1 || !vert2) return false;
    this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(
      (v) => v !== vert2
    );
    this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(
      (v) => v !== vert1
    );
  }
  removeVertex(vert) {
    // for every edge inside vert, run removeEdge
    while (this.adjacencyList[vert].length) {
      const adjVert = this.adjacencyList[vert].pop();
      this.removeEdge(vert, adjVert);
    }
    delete this.adjacencyList[vert];
  }
  // depth first search recursive
  dfsRecursive(start) {
    if (this.adjacencyList.length === 0) return null;
    // results list with the final order to be returned at the end
    const result = [];
    // object of visited key:value pairs of the vertex:true for true being visited
    const visited = {};
    const adjacencyList = this.adjacencyList;
    // for each neighbor in vertex's neighbors: if neighbor is not visited, recursively call dfs on neighbor
    function dfs(vertex) {
      // return early if vertex is empty
      if (!vertex) return null;
      // should place vertex it accepts into the visited object and push that vertex into the results array
      visited[vertex] = true;
      result.push(vertex);
      // loop over all of the values in the adjacencyList for that vertex
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
      // if any of those values have not been visited, recursively invoke the helper function with that vertex
    }
    dfs(start);
    return result;
  }

  // depth first search iterative
  dfsIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  // breadth first search iterative
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let adj = new Graph();
// adj.addVertex("zac");
// adj.addVertex("tara");
// adj.addVertex("nate");
// adj.addVertex("jan");
// adj.addVertex("steve");
// console.log(adj);
// adj.addEdge("zac", "tara");
// adj.addEdge("jan", "nate");
// adj.addEdge("jan", "steve");
// adj.addEdge("nate", "steve");
// adj.addEdge("zac", "steve");
// adj.addEdge("tara", "steve");
// console.log(adj);
// adj.removeEdge("jan", "nate");
// console.log(adj);
// adj.removeVertex("steve");
// console.log(adj);
adj.addVertex("A");
adj.addVertex("B");
adj.addVertex("C");
adj.addVertex("D");
adj.addVertex("E");
adj.addVertex("F");
adj.addEdge("A", "B");
adj.addEdge("A", "C");
adj.addEdge("B", "D");
adj.addEdge("C", "E");
adj.addEdge("D", "E");
adj.addEdge("D", "F");
adj.addEdge("E", "F");
console.log(adj);
console.log(adj.dfsRecursive("A"));
console.log(adj.dfsIterative("A"));
console.log(adj.bfs("A"));

//            A
//          /   \
//         B     C
//         |     |
//         D --- E
//          \   /
//            F
