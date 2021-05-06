// start by picking the second element in array
// now compare to the element before and swap if necessary
// continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
// repeat until the array is sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // variable to keep track of the value we're looking at
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
    // }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4, 8]));
