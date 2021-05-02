function fizzBuzz(n) {
  let final = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      final.push("FizzBuzz");
    } else if (i % 3 === 0) {
      final.push("Fizz");
    } else if (i % 5 === 0) {
      final.push("Buzz");
    } else final.push(`${i}`);
    // if (final === "") str = i;
  }
  return final;
}

console.log(fizzBuzz(15));
