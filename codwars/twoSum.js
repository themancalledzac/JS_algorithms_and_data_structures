function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let indices = [];
    let x = target - numbers[i];
    let z = numbers.indexOf(numbers[i]);
    let y = numbers.indexOf(x);
    while (y != -1) {
      indices.push(y);
      y = numbers.indexOf(x, y + 1);
    }
    if (numbers.includes(x)) {
      for (let i = 0; i < indices.length; i++) {
        if (z != indices[i]) {
          return [z, indices[i]];
        }
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4)); // [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1, 2]
console.log(twoSum([2, 2, 3], 4)); // [0, 1]

// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

// ---------------------------------------------------------------------------------------------------//

function twoSum(nums, target) {
  const arr = [];
  nums.map(function (x, ind1) {
    nums.map(function (y, ind2) {
      if (x + y == target && ind1 != ind2) arr.push(ind1, ind2);
    });
  });
  return [arr[0], arr[1]];
}
