// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// const result = addTwoNumbers(3,5)

// console.log("Result: ", result);
/* will output 8
              Result: undefined (As the function is not returning anything)
*/

// function addTwoNumbers(number1, number2)
// {
//     let result = number1 + number2;
//     return result;
//     console.log("Utkarsh"); // This line won't get executed because nothing will get executed after function return something
// }

function addTwoNumbers(number1, number2) {
    return number1+number2;
}

const Result = addTwoNumbers(3,5)
console.log("Result: ",Result);

function loginUserMessage(username) {
    if(!username) //false value as it is undefined or you can write user === undefined
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("utkarsh"))

function calculateCartPrice(...num1) //Rest Operator that accepts any number of paramaters 
{
  return num1
}

console.log(calculateCartPrice(200,400,500))

const user = {
    username: "utkarsh",
    price: 199
}

function handleObject(anyobject) //function that accept generic object
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject( {
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondvalue(getArray) { //function that accepts generic array
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500,1000]));