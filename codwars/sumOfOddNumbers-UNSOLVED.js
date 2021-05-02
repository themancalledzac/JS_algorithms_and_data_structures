function rowSumOddNumbers(rows) {
  // TODO
  // number of lines = n
  // numbers on numbers on line n(x) = n+1
  // n is 1, x is 1, y is 1
  // n is 2, x is 2, y is 8
  // n is 3, x is 3, y is 27
  // n is 4, x is 4, y is 66
  // for every n+1
  // every new line is equal to
  // (x+2) + 2(n-1) = last number, with (x+2) = first number, add all inbetween?
  // -------------------
  // (1+2) + 2(2-1) = 5
  // (5+2) + 2(3-1) = 11
  // (11 + 2) + 2(4-1) = 19
  // (19 + 2) + 2(5-1) = 29
  // our current number
  if (rows === 1) return 1;

  let lastNumber = 1;
  let initialNumber = lastNumber + 2;
  for (let i = 2; i <= rows; i++) {
    initialNumber += 2 * ([i] - 1);
    lastNumber = initialNumber - 2;
  }
  console.log(initialNumber);
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));
// console.log(rowSumOddNumbers(42));
