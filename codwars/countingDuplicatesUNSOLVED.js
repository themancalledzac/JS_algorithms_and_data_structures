function duplicateCount(text) {
  let duplicates = 0;
  let duplicate_object = {};
  str_arr = text.toLowerCase().split("");

  for (let i = 0; i < str_arr.length; i++) {
    const letter = str_arr[i];
    if (letter in duplicate_object) {
      duplicate_object[letter] += 1;
    } else {
      duplicate_object[letter] = 0;
    }
  }

  for (var letter in duplicate_object) {
    if (duplicate_object[letter] >= 1) {
      duplicates += 1;
    }
  }

  return duplicates;
}

console.log(duplicateCount("")); //0, no characters repeats more than once);
console.log(duplicateCount("abcde")); // 0);
console.log(duplicateCount("aabbcde")); // 2, a and b both occure more than once);
console.log(duplicateCount("aabBcde")); // 2, "should ignore case");
console.log(duplicateCount("Indivisibility")); // 1 - i occures six times);
console.log(duplicateCount("Indivisibilities")); // 2 - i occurs 7 times and s occurs twice,
//   "characters may not be adjacent"
// );

// -------------------------------- OTHER SOLUTIONS -------------------------------------------

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

// ------------------------------------------------------------------------------------------

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

// ------------------------------------------------------------------------------------------

function duplicateCount(text) {
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];

  lower.split("").forEach(function (letter) {
    if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
}
