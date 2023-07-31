// three type of variable var,let,const
// var : change value is true , again declare is true... before ES6
// var = global scope
// let : change value is true , again declare is false
// let = block scope
// const : change value is false , again declare is false

var a = 10;
var a = "urva";
console.log(a);
// outout:urva 



let b = 10;
b = "urva";
console.log(b);
//output : urva 


const c = 10;
c = "urva";
console.log(c);
// output : error