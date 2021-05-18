// function getDigit(num, place) {
//   numToString = num.toString();
//   numLength = numToString.length;
//   if (place > numLength) { return 0 };
//   normalPlace = numLength - (place + 1);
//   return parseInt(numToString[normalPlace]);
// }

// cleaner route

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// define a function that accepts a list of numbers
function radixSort(nums) {
  // figure out how many digits the largest number has
  let maxDigitCount = mostDigits(nums);
  // loop from k = 0 up to this largest number of digits
  for (let k = 0; k < maxDigitCount; k++) {
    // for each i of the loop:
    // create buckets for each digit (0 to k)
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // console.log(digitBuckets);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    // console.log(digitBuckets);
  }
  return nums;
  // place each number in the corresponding bucket based on it's kth digit
  // Replace our existing array with values in our buckets, starting with - and going up to k
  // return list at the end
}

// console.log(
//   radixSort([
//     3, 7, 5, 98, 234, 976, 1, 45, 35678, 3, 2, 246, 332, 8767, 234, 256,
//   ])
// );
console.log(radixSort([2, 76, 234, 0, 654, 127, 8654, 23]));
 