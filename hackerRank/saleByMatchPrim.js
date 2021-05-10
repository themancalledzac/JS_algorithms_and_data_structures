function sockMerchant(n, ar) {
  let counter = 0;
  let result = {};

  for (var char of ar) {
    result[char] > 0 ? result[char]++ : (result[char] = 1);
  }
  const values = Object.values(result);
  for (let i = 0; i < values.length; i++) {
    if (values[i] >= 2) {
      let divide = Math.floor(values[i] / 2);
      counter += divide;
    }
  }
  return counter;
}

console.log(sockMerchant(9, [1, 2, 2, 1, 1, 3, 4, 1, 2]));
