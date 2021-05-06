function linearSearch(arr, num) {
  if (arr.length === 0) return -1;

  //   for (var val in arr) {
  //     if (arr[val] === num) {
  //       index = val;
  //       return index;
  //     }
  //   }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(linearSearch([4, 8, 2, 56, 0, 12, 5, 25, 7, 31], 7));
