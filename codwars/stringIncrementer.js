function incrementString(str) {
  let num = [];
  let strArr = str.split("");
  let char = strArr[strArr.length - 1];

  // if str is empty
  if (str === "") return (str = "1");
  // if str has no number on end
  if (!isAlphaNumeric(char)) {
    let final = strArr.push("1");
    console.log(final);
  }

  // whilte strArr[strArr.length - 1] === (code > 47 && code < 58)

  // if the last item in strArr is a number, pop it off, and then append it to numbers array
  while (isAlphaNumeric(char)) {
    console.log(char);
    num.unshift(strArr.pop());
    console.log(strArr);
    console.log(num);
  }

  num.join("").parseInt;
  console.log(num);

  // given a string, increment the number on the end (if there is one) up one number
  // if no number on the end, add one
  // if
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt();
  if (!(code > 47 && code < 58)) return false;
  return true;
}

// console.log(incrementString(""), "1");
// console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar000"), "foobar001");
// console.log(incrementString("foobar001"), "foobar002");
// console.log(incrementString("foobar99"), "foobar100");
// console.log(incrementString("foobar099"), "foobar100");
