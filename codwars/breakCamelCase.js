// complete the function
function solution(string) {
  if (string === null) return null;

  for (let i = 0; i < string.length; i++) {
    let temp = 0;
    if (string[i] != string[i].toLowerCase()) {
      string = string.substring(temp, i) + " " + string.substring(i);
      temp = i;
      i++;
    }
  }
  return string;
}

console.log(solution("helloThereHansome")); // hello there hansome
console.log(solution("identifier"));


// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//


// complete the function
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
    
}

// ---------------------------------------------------------------------------------------------------//

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");
    
    
    // ---------------------------------------------------------------------------------------------------//

  function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}