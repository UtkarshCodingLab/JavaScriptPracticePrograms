console.log("2">1); //will output true as string "2" will be converted to number automatically

console.log("02">1);

console.log("2"===2); //will output false as === compares the value as well as datatype

//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference(Non Primitive)

// Arrays, Objects, Functions

const scorevalue = 100.3 //Number can also contain decimal values
console.log(scorevalue);

const outsideTemp = null
console.log(typeof outsideTemp);

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); 

const heros = ["Captian America", "Hulk", "Iron Man"];
console.log(heros);

let myobj = {
    name: "utkarsh",
    age: 23,
}
console.log(myobj);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "utkarsh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


