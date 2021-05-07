function assertSimilar(array) {
  // far more simple than realized when using the .map route, which allows you to pass in the index as one of the parameters

  return array.map((line, index) => {
    return `${index + 1}: ${line}`;
  });
  //   let result = [];
  //   for (let i = 0; i < array.length; i++) {
  //     console.log(i + 1);
  //     // const initial = `"${i + 1}: ${array[i]}", `;
  //     // const final = `"${i + 1}: ${array[i]}"`;
  //     const count = i + 1;
  //     // if (i === array.length - 1) {
  //     //   result[count] = array[i];
  //     // } else {
  //     result[count] = array[i];
  //     // result[i + 1] = array[i];
  //     // console.log(result);
  //     // }
  //   }
}

console.log(assertSimilar([])); // [], "Empty array should return empty array"));
console.log(assertSimilar(["a", "b", "c"])); // ["1: a", "2: b", "3: c"], "Return the correct line numbers"

// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

// let number = (a) => a.map((v, i) => `${i + 1}: ${v}`);

// ---------------------------------------------------------------------------------------------------//
// for loop version
// ---------------------------------------------------------------------------------------------------//
var number = function (arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i += 1) {
    newArr.push(i + 1 + ": " + arr[i]);
  }

  return newArr;
};
