class RomanNumerals {
  constructor() {
    this.roman = "";
    this.number;
  }

  toRoman(number) {
    this.number = number;
    length = this.number.length;
  }

  fromRoman(roman) {
    this.roman = roman;
    length = this.roman.length;
  }
}

console.log(RomanNumerals.toRoman(1000)); //, "M");
console.log(RomanNumerals.toRoman(4)); //, "IV");
console.log(RomanNumerals.toRoman(999)); //, "CMXCIX");
console.log(RomanNumerals.toRoman(1)); //, "I");
console.log(RomanNumerals.toRoman(1991)); //, "MCMXCI");
console.log(RomanNumerals.toRoman(2006)); // , "MMVI");
console.log(RomanNumerals.toRoman(2020)); // , "MMXX");

console.log(RomanNumerals.fromRoman("XXI")); // , 21);
console.log(RomanNumerals.fromRoman("I")); // , 1);
console.log(RomanNumerals.fromRoman("III")); // , 3);
console.log(RomanNumerals.fromRoman("IV")); // , 4);
console.log(RomanNumerals.fromRoman("MMVII")); // , 2007);
console.log(RomanNumerals.fromRoman("MDCLXIX")); // , 1669);
