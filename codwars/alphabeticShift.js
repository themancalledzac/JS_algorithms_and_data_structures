function alphabeticShift(inputString) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  splitString = inputString.split("");
  //   console.log(splitString);
  for (let i = 0; i < splitString.length; i++) {
    // initial value of indexValue is 0 for the 'if splitString[i] is z'
    let indexValue = 0;
    if (splitString[i] !== "z") {
      indexValue = alphabet.indexOf(splitString[i]) + 1;
    }
    splitString[i] = alphabet[indexValue];
  }
  return splitString.join("");
}

console.log(alphabeticShift("crazy")); // dsbaz
