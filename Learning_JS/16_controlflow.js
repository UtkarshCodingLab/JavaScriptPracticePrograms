// comparison operators: <, >, <=, >=, ==, !=, ===, !==

const balance = 1000

if(balance>500) console.log("test"); //If Condition with Implicit scope

// falsy values - false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// Truthy values - "0", 'false', " ", [], {}, function(){}


// check if an Array is empty

const myArr = []

if(myArr.length===0) {
    console.log("Array is empty");
}

// check if an Object is empty

const emptyObj = {}

if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty");
}

// Ternary Operator

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")