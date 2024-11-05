const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item) => {
    return item
})

console.log(values); // will output undefined (as the forEach loop does not return anything)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// myNums.filter() // acccepts callback function

let newNums = myNums.filter((num) => num>4) // will return values (based on the condition specified)

console.log(newNums);

newNums = myNums.filter( (num) => {
   return num>4 //when you start scope you need to explicitly write return keyword otherwise you will get an empty array
})

// Return values in a seperate array using forEach()

newNums = []

myNums.forEach((num) => {
    if(num>4) {
        newNums.push(num)
    }
})

console.log(newNums)

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

newNums = myNumbers.map((num) => num+10) // map iterate through every element of the array & also returns the value you can also do operations in it

console.log(newNums);

newNums = myNumbers.map((num) => num*10).map((num) => num+1).filter((num) => num>=40)
//the result of previous function will be pass in succeeding function

console.log(newNums);
