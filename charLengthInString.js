// write a function which takes in a string and returns counts of each character in the string.
function charCount(str) {
  let result = {};
  for (var char of str) {
    // if (/[a-z0-9]/.test(char)) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
    // result[char] = ++obj[char] || 1;
    // }
  }
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

// for each letter in a string, return the number of each character in that string.

// toLowerCase will be needed
// remove all " " spaces

// function charCount(str) {
//   // make object to return at end
//   let spaceLess = str.split(" ").join("");
//   let result = {};
//   // loop over string for each character...
//   for (let i = 0; i < spaceLess.length; i++) {
//     let char = spaceLess[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }

console.log(charCount("aaaa")); // {a:4}
console.log(charCount("hello")); // {h:1, e:1, l:2, o:1}
console.log(charCount("Hello ya!!!")); // {h:1, e:1, l:2, o:1}
