// pure recursion method of collecting odds
// we use the .concat method so that, after we use recursion on each item, slicing as we go, we end up concatting for each round of recursion
// for Arrays, we use methods like slice, spreac operator, and concat to make copies of arrays so you do not mutate them.
// remember that strings are immutable, so you will need to use methods like slice, substr, or substring to make copies of strings
// to make copies of objects use Object.assign, or the spread operator
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // concat to add to newArray, which is normally blank at every call of collectOddValues, but because of recursion, ends up adding each odd number, at the end of the call stack
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15]));
