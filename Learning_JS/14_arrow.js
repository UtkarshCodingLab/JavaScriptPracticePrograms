// this keyword refer to current context

const user = {
    username: "utkarsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // will object {} as there is no content in global

// function chai() {
//     let username = "utkarsh"
//     console.log(this.username);
// }

// chai() // will output as undefined as context only work in object not in function

const chai = () => {
    let username = "utkarsh"
    console.log(this.username);
}

chai() // will output as undefined as context only work in object not in arrow function also

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4)) 

// const addTwo = (num1, num2) => num1 + num2 // Implicit return Arrow Function (does not need to write return keyword)
           /* OR */
// const addTwo = (num1, num2) => (num1+num2) // Wrap num1+num2 in these Parenthesis, so you do not need to write return keyword

const addTwo = (num1, num2) => ({username: "utkarsh"})

console.log(addTwo(3,4));

