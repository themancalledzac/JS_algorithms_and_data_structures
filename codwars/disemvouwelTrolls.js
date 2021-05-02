function disemvowel(str) {
  // vowels, split into an array of each vowel
  const vowels = "aeiouAEIOU".split("");

  // split string into an array
  const strArr = str.split("");

  // filter our array by the vowels
  let disemvow = strArr.filter((value) => !vowels.includes(value));

  // rejoin the string back together
  return disemvow.join("");
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"));

// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
