// similar to bubble sort, but instead of first placing large values into sorted position at the End of the array, it places small values into sorted position one at a time.
// still moving from beginning to end, just sorting at the beginning.
// only good if you need to swap as few times as possible, perhaps for memory, but honestly not very useful.

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([2, 3, 7, 1, 5, 4]));
