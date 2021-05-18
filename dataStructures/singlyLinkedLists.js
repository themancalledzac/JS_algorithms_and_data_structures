// linked list is a data structure, with a head, tail, and length property
// linked lists consist of nodes, and each node has a value and a pointer to another node or null

// piece of data = val
// reference to next node - next

// Singly Linked List Big O
// Insertion -       O(1)
// Removal - O(1) or O(N)
// Searching -       O(N)
// Access -          O(N)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    // head refers to the first item in the list, the beginning of the list
    this.head = null;
    // tail refers to the last item, or the tail of the list
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // create a new node using the value passed to the function
    let newNode = new Node(val);
    // if no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // else set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment length by one
    this.length++;
    // console.log(this);
    return this;
  }
  pop() {
    // if there are no nodes, return undefined
    if (!this.head) return undefined;
    // loop through list until you reach the tail
    let current = this.head;
    let newTail = current;
    // set the next property of the 2nd to last node to be null
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // set the tail to be the 2nd to last node
    this.tail = newTail;
    this.tail.next = null;
    // decrement the length of the list by 1
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the value of the node removed
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    // store current head property in a variable
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }
  unshift(val) {
    // create a new node using the value passed to the function
    let newNode = new Node(val);
    // if there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // set the newly created node's next property to be the current head property on the list
      newNode.next = this.head;
      // set the head property on the list to be that newly created node
      this.head = newNode;
    }
    // increment the length of the list by 1
    this.length++;
    // return the linked list
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
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
    // we use the poppop "!!" to return a truthy response
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let previous = this.get(index - 1);
    var temp = previous.next;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    // use the get method to access the node at the index - 1
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    // set the next property on that node to be the next of the next node
    previousNode.next = removed.next;
    // decrement length
    this.length--;
    //return value
    return removed;
  }
  reverse() {
    // variable called NODE and initialize it to the head property
    let node = this.head;
    // swap the head and tail
    this.head = this.tail;
    this.tail = node;
    let next;
    // reason we want previous to be null, is that we need to make sure the end of our list, the tail.next is null. don't want it be be undefined.
    let prev = null;

    // loop through the list
    for (let i = 0; i < this.length; i++) {
      // set next to be the next property on whatever NODE is
      next = node.next;
      // set the next propeprty on the node to be whatever previous is
      node.next = prev;
      // set previous to be the value of the node variable
      prev = node;
      // set the node variable to be the value of the next variable
      node = next;
    }
    return this;
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

// var first = new Node("Hi");
// first.next = new Node("there");

var list = new SinglyLinkedList();
list.push("Beatles");
list.push("Jimi Hendrix");
list.push("Led Zeppelin");
list.push("Pink Floyd");
list.push("Fleetwood Mac");
list.push("Journey");
list.push("The Who");
list.push("The Doors");
console.log(list);
list.pop();
console.log(list);
list.shift();
console.log(list);
list.unshift("Eminem");
console.log(list);
list.set(4, "Radiohead");
list.get(4);
list.print();
list.reverse();
list.print();
