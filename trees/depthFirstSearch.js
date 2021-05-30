// DFS - PreOrder

// create a variable to store the values of nodes visited

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else return true;
    }
    return false;
  }

  // Depth First Search Pre Order
  dfsPreOrder() {
    let data = [];
    function traverse(node) {
      // data.push(node); // this is the normal route, the below is just so it gives us a nice array of the numbers
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  // Depth First Search Post Order
  dfsPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      // data.push(node); // this is the normal route, the below is just so it gives us a nice array of the numbers
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  // Depth First Search In Order
  dfsInOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      // data.push(node); // this is the normal route, the below is just so it gives us a nice array of the numbers
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(9);
tree.insert(11);
tree.insert(8);
tree.insert(12);
tree.insert(7);
tree.insert(13);
tree.insert(6);
tree.insert(13);
tree.insert(5);
tree.insert(14);
tree.insert(4);
tree.insert(15);
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
// console.log(tree);

// queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// visited = [];
