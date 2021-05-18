function toCamelCase(str) {
  if (!str) return "";

  let dash = "-";
  let underscore = "_";
  let arr = [];

  if (str.includes(dash)) {
    arr = str.split("-");
  }
  if (str.includes(underscore)) {
    arr = str.split("_");
  }

  for (let i = 1; i < arr.length; i++) {
    let word = arr[i];
    console.log(arr);
    word = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(word);
    arr[i] = word;
  }

  console.log(arr);
  return arr.join("");
}

console.log(toCamelCase("the_stealth_warrior")); // theStealthWarrior

// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
// ---------------------------------------------------------------------------------------------------//

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
// ---------------------------------------------------------------------------------------------------//

function toCamelCase(str) {
  return str
    .split(/-|_/g)
    .map(
      (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
    )
    .join("");
}
