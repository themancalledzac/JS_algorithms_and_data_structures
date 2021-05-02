function abbrevName(name) {
  // code away
  let final = [];
  name.split(" ").forEach((word) => {
    final.push(word[0].toUpperCase());
  });
  return final.join(".");
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Freeman"));
console.log(abbrevName("Evan Cole"));

// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// ---------------------------------------------------------------------------------------------------//

function abbrevName(name) {
  return name
    .split(" ")
    .map((x) => x.substr(0, 1).toUpperCase())
    .join(".");
}

// ---------------------------------------------------------------------------------------------------//

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

// ---------------------------------------------------------------------------------------------------//

const abbrevName = (name) => name.match(/\b\w/g).join(".").toUpperCase();
