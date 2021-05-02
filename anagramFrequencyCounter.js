function anagram(str1, str2) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let str1Arr = str1.toLowerCase().replace(regex, "");
  let str2Arr = str2.toLowerCase().replace(/ /g, "");
  //   console.log(str1Arr);
  //   console.log(str2Arr);
  if (str1Arr.length !== str2Arr.length) return false;

  let lookup = {};

  // shorter code from presenter here
  for (let i = 0; i < str1Arr.length; i++) {
    let letter = str1Arr[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < str2Arr.length; i++) {
    let letter = str2Arr[i];
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }

  //   let frequencyCounter1 = {};
  //   let frequencyCounter2 = {};
  //   for (let val of str1Arr) {
  //     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  //   }
  //   for (let val of str2Arr) {
  //     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  //   }
  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);

  //   for (let key in frequencyCounter1) {
  //     if (!(key in frequencyCounter2)) {
  //       return false;
  //     }
  //     if (frequencyCounter2[key] !== frequencyCounter1[key]) {
  //       return false;
  //     }
  //   }
  return true;
}

console.log(anagram("", ""));
console.log(anagram("mars", "ram"));
console.log(anagram("rat", "car"));
console.log(anagram("ape", "pea"));
console.log(anagram("ram", "arm"));
console.log(anagram("a near miss", "an air miss"));
console.log(anagram("saintliness", "least in sins"));
