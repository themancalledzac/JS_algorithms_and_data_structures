// Stack is a data structure, sort of like shift and unshift of singlyLinkedList
// we 'push' and 'pop' from the front of the list because, to keep our bigO at constant time,
// we don't want to have to go all the way through the list to find the second to last item.
// Stacks are a LIFO data structure, where the last value in is always the first one out.
// Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
// They are not a built in data structure in JavaScript, but are relatively simple to implement

// Stack Big O
// Insertion - O(1)
// Removal -   O(1)
// these aren't important, because if we want to search, use a different route
// Searching - O(N)
// Access -    O(N)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();

stack.push(23);
stack.push(24);
console.log(stack);
console.log(stack.pop());
console.log(stack);
