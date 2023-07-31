let str = "123";
console.log(typeof str); // string
console.log(typeof +str);// number

let num = Number(str); // becomes a number 123
console.log(typeof num); // number

console.log(Number("   123   ")); // 123
console.log(Number("123z"));      // NaN (error reading a number at "z")
console.log(Number(true));        // 1
console.log(Number(false));       // 0


console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // spaces, also true (any non-empty string is true)