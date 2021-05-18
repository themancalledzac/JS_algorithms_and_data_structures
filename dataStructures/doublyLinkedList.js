// Doubly Linked Lists
// Big O
// Insertion - O(1)
// Removal -   O(1)
// Searching - O(N)
// Access -    O(N)
// technically searching is O(N/2) but that's still basically O(N)

// Doubly Linked lists are almost identical to Singly
// Better for finding nodes in half the time
// takes up more memory considering the extra pointer

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);

    // check if head is null
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // next property on the tail to be that node
      this.tail.next = newNode;
      // previous property on the newly created node to be set as the tail
      newNode.prev = this.tail;
      // set tail to be the newly created node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    // store current tail in a variable
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update the tail to be the previous node.
      this.tail = currentTail.prev;
      // set the newTail's next to be null
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }
  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    if (index <= this.length / 2) {
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      // working from the back
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    console.log(current);
    return current;
  }
  set(index, val) {
    let current = this.get(index);
    if (current != null) {
      current.val = val;
      return true;
    } else return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let previousNode = this.get(index - 1);
    var afterNode = previous.next;
    (previousNode.next = newNode), (newNode.prev = previousNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let toBeRemoved = this.get(index);
    let previousNode = this.get(index - 1);
    let afterNode = this.get(index + 1);
    previousNode.next = afterNode;
    afterNode.prev = previousNode;
    toBeRemoved.next = null;
    toBeRemoved.prev = null;
    this.length--;
    return toBeRemoved;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new DoublyLinkedList();
list.push("Beatles");
list.push("Jimi Hendrix");
list.push("Led Zeppelin");
list.push("Pink Floyd");
list.push("Fleetwood Mac");
list.push("Journey");
list.push("The Who");
list.push("The Doors");
// console.log(list);
list.get(4);
list.pop();
list.print();
list.unshift("Radiohead");
list.get(0);
list.get(5);
list.print();
list.remove(4);
list.print();
