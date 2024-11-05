const fullname = "utkarsh jain"
const repoCount = 50

console.log(`Hello my name is ${fullname} and my repo count is ${repoCount}`);

const gameName = new String('utkarsh') //other way of declaring string (Explicitly defining the gameName will be of type String)

console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4); //does not include the end index
console.log(newString);

const newStringOne = "   utkarsh   "
console.log(newStringOne.trim());

const url = "https://utkarsh.com/utkarsh%20jain"
console.log(url.replace('%20','-'))
console.log(url.includes('utkarsh'))

const stringName = new String('utkarsh-jain-com')
console.log(stringName.split('-'));

