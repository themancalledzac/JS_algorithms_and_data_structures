// https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html

function validatePIN(pin) {
  //return true or false
  let originalLength = pin.length;
  if (originalLength != 6 && originalLength != 4) return false;
  // the carrot starts, 0-9, the plus indicates one or more items, dollar sign ends
  let numbers = /^[0-9]+$/;
  if (!pin.match(numbers)) return false;
  if (parseInt(pin) < 0) return false;
  return true;
}

console.log(validatePIN("4567")); // treu
console.log(validatePIN("456")); // false
console.log(validatePIN("456a")); // false
console.log(validatePIN("45654")); // false
console.log(validatePIN("456547")); // true
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }

// ---------------------------------------------------------------------------------------------------//

// const validatePIN = (pin) => /^(\d{4}$|\d{6}$)/.test(pin);
