// // Given an integer x, return true if x is palindrome integer.

// // An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// var isPalindrome = function (x) {
//   if (x < 0) return false;

//   let y = x.toString().split("").reverse().join("");
//   console.log(x);
//   console.log(x.toString());
//   console.log(x.toString().split(""));
//   console.log(x.toString().split("").reverse());
//   console.log(x.toString().split().reverse().join());

//   let z = parseInt(y);
//   if (x === z) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome(323));

// future dev
// let z = x % 10;

// console.log(z);

var isPalindrome = function (x) {
  if (x < 0) return false;

  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + (i % 10);
  return rev === x;
};

console.log(isPalindrome(101));
// console.log(is)
