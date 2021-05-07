function merge(arr1, arr2) {
  let finalArr = [];
  let i = 0;
  let j = 0;
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
// our mergeSort function recursively calls, initially left, splitting it up each time.. think the call stack. as we go through the function, we check if arr has a length of 1. if so, we return that array, adding it to the stack. if not, we start with left, and break it in half, recursively recalling the left portion until it is all single length arrays, all being added one by one to the call stack (think left to right of the array so far... our example below would start with [3,8,34,9], which would break into the left of [3,8], and then [3] being our LEft gets returned on line 26 as it's single, while [8] is our right portion of that last slice, so it gets called, is length = 1, and becomes our right. we then call the return merge(left, right) here, with those two., basically adding each of our array, one at a time, left to right. When we finally get to the very end of returning merge(left, right), )
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, half));
  let right = mergeSort(arr.slice(half));
  return merge(left, right);
}

console.log(mergeSort([3, 8, 34, 9, /* halfway point */ 14, 2, 57, 45]));
