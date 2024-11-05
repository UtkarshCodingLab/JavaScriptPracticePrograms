const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros) //push to existing array

const allHeros = marvel_heros.concat(dc_heros) // returns new Array after combining two arrays
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator will spread the Array into single-single elements
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively
console.log(real_another_array);

console.log(Array.from("utkarsh"))

console.log(Array.from({name: "utkarsh"})) // will output [] a it will lead to a confusion which to convert an Array key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // returns a new array from a set of elements