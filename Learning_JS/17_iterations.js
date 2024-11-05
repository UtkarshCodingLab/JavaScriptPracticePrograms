let myArray = ["flash", "batman", "superman"]

for(let index=0; index<=myArray.length; index++)
{
    const element = myArray[index];
    console.log(element);
}

// for of loop

const arr = [1,2,3,4,5]

for(const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"

for(const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

/* MAP
-> The Map object holds key-value pairs and remembers the original insertion order of the keys
-> Any value (both objects and primitive values) may be used as either a key or a value
-> key in the Map may only occur once. it is unique in the Map's collection
*/

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for(const[key,value] of map) { // destructure the array of map values to hold key and value seperatly
   console.log(key, ':-', value);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for(const[key,value] of myObject) { // object is not iterable in for of loop
//     console.log(key, ':-', value);
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loop

for(const key in myObject) { // for in loop works for iterating the object
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// In for in loop we get key in case of array, while in for of loop we get values in case of array

const programming = ["js","rb","py","java","cpp"]

for(const key in programming) {
    console.log(programming[key]);
}

// Map is not iterable in casse of for in loop


//forEach Function

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach() accepts callback function

coding.forEach(function(item) {
    console.log(item);
})

// through arrow function

coding.forEach((item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe) //reference of printMe function is passed  inside forEach()

coding.forEach((item,index,arr)=> { //forEach() also have parameters such as index and full array besides element(item)
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => { // Here object is passed as item
    console.log(item.languageName);
})