function isPangram(str) {
  //------------
  //   alphabet array
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //
  // regex expression that, inbetween the /____/, we have a \s, which looks for all whitespaces in a string, and ends with the g for global, so looking through the whole array
  let regex = /\s/g;
  //
  // our string that, after to lowercase, replaces all regex whitespaces with nothing
  let string = str.toLowerCase().replace(regex, "");

  //
  // Out for loop goes over every letter in the alphabet, and use indexOf to find the index of each letter in the alphabet in our string.
  // if indexOf can't find the letter, the loop ends with a return false.
  for (let i = 0; i < alphabet.length; i++) {
    if (string.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(
  isPangram(
    "This is not a pangram, but I'm curious that if I keep typing, maybe it someday will be?."
  )
);
// ------------------------------------------------------------------------------------------//
//                                                                                           //
//                                        OTHER ANSWERS                                      //
//                                                                                           //
// ------------------------------------------------------------------------------------------//

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

// ------------------------------------------------------------------------------------------//
//                                                                                           //
// ------------------------------------------------------------------------------------------//

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}

// ------------------------------------------------------------------------------------------//
//                                                                                           //
// ------------------------------------------------------------------------------------------//

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

// ------------------------------------------------------------------------------------------//
//                                                                                           //
// ------------------------------------------------------------------------------------------//
