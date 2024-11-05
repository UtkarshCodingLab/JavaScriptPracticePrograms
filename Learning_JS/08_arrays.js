// Javascript arrays are resizable and contain a mix of different data types

const myArr = [0,1,2,3,4,5]

// Javascript array-copy operations create shallow copies 

// A Shallow copy of an object is a copy whose properties share the same references

// A deep copy of an object is a copy whose properties do not share the same references 

const myHeros = ["Doctor Strange","Groot"];
const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

myArr.push(6)
myArr.pop()

myArr.unshift(9)
myArr.shift(9)

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) // return a section of an array which includes start index and end index and also manipulate the array
console.log("C ",myArr);
console.log(myn2);