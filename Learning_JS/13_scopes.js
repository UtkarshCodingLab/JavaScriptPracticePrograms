if(true)
{
    let a=10
    const b=20
    var c=30
}

console.log(c) // c should be unaccessible as c is defined in block scope that's why we don't use var keyword

/*
variable declared in global scope are accessible inside blockscope, but variable declared in block scope
are not accessible inside global scope
*/

let a=300
if(true) {
    let a=10
    const b=20
    console.log("Inner: ",a);
}

console.log(a);

// function one() {
//     const username = "utkarsh"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);

//     two()
// }

// one() 
/* will give error because of console.log(website) as website is a block level variable in
function two() that can not be accessed in function one() if we remove console.log(website) line 
then we will get utkarsh as output
*/

// addone(5)

// function addone(num) {
//     return num+1
// }

// addTwo(5)

// const addTwo = function(num) {
//     return num+2
// }

/*
if we call addTwo(5) method before intialiozation, we will get an error as it is stored in expression.
but addone(5) function will be executed if we call it before initialization
*/