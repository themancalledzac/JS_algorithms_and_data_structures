// similar to binary search tree, with some different rules.
// in a MaxBinaryHeap, parent nodes are always larger than child nodes.
// in a MinBinaryHeap, parent nodes are always smaller than child nodes

// MAX BINARY HEAP

// each parent has at most two child nodes
// the value of each parent node is ALWAYS greater than its child nodes
// in a max Binary Heap, the parent is greater than the child, but there are no guarantees between sibling nodes
// a binary heap is as compact as possible.  All the children of each node are as full as they can be and left children are filled out first

// for any index of an array at index n...
// the left child is stored at 2n + 1
// the right child is stored at 2n + 2

// for any child node of an array at index n....
// it's parent is at index (n-1)/2 (floored)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    // list.push
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  // The procedure for deleting the root from the heap(effectively extracting the maximum element in a max-heap or the minimum in a min-heap) and restoring the properties is called down-heap)
  extractMax() {
    // swap the first value in the values property with the last value
    // pop from the values property, so you can return the value at the end.
    // 'sink down' to the correct spot
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // move it to the correct position
      this.bubbleDown();
    }
    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(120);
console.log(heap);
heap.extractMax();
console.log(heap);

//           120
//      39         55
//   18    27   12    33
