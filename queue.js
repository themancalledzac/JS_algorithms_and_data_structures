// Queue is a datastructure where you add / remove data
// A Queue is a FIFO - First in First out
// think waiting in line for coffee, background tasks, uploading resources, printing, etc

// Stack Big O
// Insertion - O(1)
// Removal -   O(1)
// these aren't important, because if we want to search, use a different route
// Searching - O(N)
// Access -    O(N)

// let q = [];

// remove from the beginning route. Bad Big-O when removing, as we have to reindex every item everytime we remove from the front of the list.
// console.log(q.push("first"));
// console.log(q.push("second"));
// console.log(q.shift());
// console.log(q.shift());

// remove from end route
// bad Big-O when adding to the front of the list, as it requires to reindex every item every time we ADD to the front of the list.
// console.log(q.unshift("first"));
// console.log(q.unshift("second"));
// console.log(q.pop());
// console.log(q.pop());

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
    // above is the combined version of these two lines
    //     this.size++;
    //     return this;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    // console.log(temp.val);
    return "Returning '" + temp.val + "' From our queue";
  }
}

let q = new Queue();

console.log(q.enqueue("First"));
console.log(q.enqueue("Second"));
console.log(q.enqueue("Third"));
console.log(q.enqueue("Fourth"));
console.log(q);
console.log(q.dequeue());
console.log(q);
console.log(q.dequeue());
console.log(q);
