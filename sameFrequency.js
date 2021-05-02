// how do we tell if the numbers in array 1, once squared, are contained in array two?

function same(str, strTwo) {
  if (str.length !== strTwo.length) return false;
  strSq = [];
  for (let i = 0; i < str.length; i++) {
    let correctIndex = strTwo.indexOf(str[i] ** 2);
    // if that number squared's index in strTwo does not exist, -1 means false, we return false
    if (correctIndex === -1) {
      return false;
    }
    console.log(strTwo);
    // else we splice, or remove that index from strTwo
    strTwo.splice(correctIndex, 1);
    // let y = str[i] * str[i];
    // console.log(y);
    // if (strTwo.includes(y)) {
    //   strSq.push(y);
    // }
  }
  //   if (strSq)
  return true;
  //   return str, strTwo;
}

console.log(same([1, 2, 3], [4, 1, 9])); // outcome should be some combination of [4,1,9]
console.log(same([5, 1, 6], [1, 36, 25])); // outcome should be some combination of [1,36,25]
