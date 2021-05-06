// RECURSIVE SOLUTION

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// NON RECURSIVE SOLUTION

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));
console.log(factorial(11));
console.log(factorial(12));
console.log(factorial(13));
console.log(factorial(14));
console.log(factorial(15));
