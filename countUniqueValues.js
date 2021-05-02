// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// O(N) Time

function countUniqueValues(arr) {
  //   console.log(arr.length);
  //   if (arr.length === 0) return 0;
  //   let left = 0;
  //   let right = left + 1;
  //   while (right < arr.length - 1) {
  //     if (left === right) {
  //       right + 1;
  //     }
  //     if (left < right) {
  //       left + 1 && arr[left] === [right];
  //     }
  //     return left;
  //   }
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(i, j);
    return i + 1;
  }
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 112, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, -1, 1]));
