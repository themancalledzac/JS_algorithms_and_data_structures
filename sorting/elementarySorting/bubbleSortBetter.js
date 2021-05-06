// Optimized with a noSwaps variable, which, after a full loop with no swaps or changes, we end.
// for long arrays that are mostly sorted, this becomes AMAZING in terms of not needing to keep going through the loop once we have no more swaps needed.

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([5, 3, 4, 1, 2, 6, 7, 8, 9, 10]));
