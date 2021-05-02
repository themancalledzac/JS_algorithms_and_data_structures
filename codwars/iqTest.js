function iqTest(numbers) {
  // ...
  // split
  str = numbers.split(" ");
  //   console.log(str);
  // odds array filtered
  let odds = str.filter((n) => n % 2);
  let evens = str.filter((n) => !odds.includes(n));
  //   console.log(odds);
  //   console.log(evens);
  // if odds are it, let's return the index of str where it equals our odds array, +1
  if (odds.length === 1) {
    return str.indexOf(odds[0]) + 1;
    // if odds are longer than 1, we filter our string and return all that do not equal odds
  } else {
    return str.indexOf(evens[0]) + 1;
  }
}

// for loop that moves each item into two separate arrays. if array.length===1, search original array for that number, and print it's location+1

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("3 5 3 2 11"));

// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

function iqTest(numbers) {
  numbers = numbers.split(" ").map(function (el) {
    console.log(parseInt(el));
    return parseInt(el);
  });

  var odd = numbers.filter(function (el) {
    return el % 2 === 1;
  });
  var even = numbers.filter(function (el) {
    return el % 2 === 0;
  });

  return odd.length < even.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1;
}
// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

function iqTest(numbers) {
  var nums = numbers.split(" ").map((x) => x % 2);
  var sum = nums.reduce((a, b) => a + b);
  var target = sum > 1 ? 0 : 1;

  return nums.indexOf(target) + 1;
}
