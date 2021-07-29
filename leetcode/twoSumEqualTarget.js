// var twoSum = function (nums, target) {
//   const arr = [];

//   nums.map(function (x, ind1) {
//     nums.map(function (y, ind2) {
//       if (x + y == target && ind1 != ind2) arr.push(ind1, ind2);
//     });
//   });

//   return [arr[0], arr[1]];
// };

// ------------------------------------------------------------------------------------------//

// var twoSum = function (nums, target) {
//   // Create a new map object
//   const map = new Map();
//   // Iterate through the numbers
//   for (let i = 0; i < nums.length; i++) {
//     // calculate the complement of the target value
//     const complement = target - nums[i];
//     // if the complement is already found
//     if (complement in map) {
//       // return the index of the complement, and current index
//       return [map[complement], i];
//     }
//     // else, add the number to the map
//     map[nums[i]] = i;
//   }
// };

// // ------------------------------------------------------------------------------------------//

// // O(n) - One-pass Hash Table
// var twoSum = function(nums, target) {
//     let map = new Map;
//     for (var i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i);
//     }
// }

// ------------------------------------------------------------------------------------------//

const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
