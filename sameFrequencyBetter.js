function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // each of these objects will count the frequency of individual values in the arrays
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // for Each Value in Array1, this is a "for of" loop
  for (let val of arr1) {
    // basically for each value of array 1, we are going to give it +1 if it exists, or if it doesn't (that 0), we will initialize it as 1. giving each item in array1 a value, and as we loop over, we add 1 everytime we have that value again, giving us the key:value pair we see in the answer
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  // for every key in frequencyCounter, if that key sequred is not in the other, return false 
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
