//objects

//create object
const item = {
    name: 'urva',
    age: 33,
    male: true
}

//access object
//1st way
let ans = item.name;
console.log(ans);
//2nd way
let ans1 = item["age"];
console.log(ans1);

//this keywor
let user = {
    name: "John",
    age: 30,


    sayHi() {
        // "this" is the "current object"
        console.log(this.name);
    }
};

user.sayHi(); // John