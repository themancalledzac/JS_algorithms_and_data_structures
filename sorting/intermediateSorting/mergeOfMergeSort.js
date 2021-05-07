// combination of, obviously, merging and sorting, actually starting by splitting
// exploits the fact that arrays of 0 or 1 element are always sorted
// works by decomposing an arraay into smaller arrays of 0 or 1 elements, then building up a newly sorted array. // divide and conquer here

// function mergeSort() {}

function merge(arr1, arr2) {
  let finalArr = [];
  let i = 0;
  let j = 0;
  // take a look at the smallest values in each input array
  // start with smallest values in each array (basically start at the beginning)
  // have two counters for each, i, j
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      finalArr.push(arr1[i]);
      i++;
    } else {
      finalArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    finalArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    finalArr.push(arr2[j]);
    j++;
  }
  return finalArr;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
