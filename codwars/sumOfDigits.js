function addTwoDigits(n) {
  let digits = (n + "").split("");
  return parseInt(digits[0]) + parseInt(digits[1]);
}

console.log(addTwoDigits(45)); // 9
console.log(addTwoDigits(23)); // 5
