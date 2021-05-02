var summation = function (num) {
  // Code here
  sum = 0;
  //   array = [];

  for (let i = 1; i <= num; i++) {
    // array.push(i);
    sum += i;
    // console.log(array);
  }
  return sum;
  //   return array.reduce((a, b) => {
  //     return a + b;
  //   }, 0);
};

console.log(summation(1)); // 1
console.log(summation(8)); // 36

// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

const summation = (n) => (n * (n + 1)) / 2;

8 * 9 / 2

8 + 1 = 9
7 + 2 = 9
6 + 3 = 9
5 + 4 = 9

4 x 9 = 36
