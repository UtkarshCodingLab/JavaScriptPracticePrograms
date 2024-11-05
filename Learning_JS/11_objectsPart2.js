// const applicationUser = new Object() // Singleton Object
const applicationUser = {} // non-Singleton Object

applicationUser.id = "123abc"
applicationUser.name = "Sammy"
applicationUser.isLoggedIn = false

console.log(applicationUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "utkarsh",
            lastname: "jain"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2) 
//copy the values of all of the enumerable own properties from one or more source objects to a target object

console.log(obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);

const users = [
    {
        id:1,
        email: "u@gmail.com"
    }
]

console.log(users[0].email);

console.log(Object.keys(applicationUser)); // will store the keys of application user in an array
console.log(Object.values(applicationUser)); // will store the values of application user in an array

console.log(Object.entries(applicationUser)) // will output all the key-value pair in an array

console.log(applicationUser.hasOwnProperty('isLoggedIn'));
// returns true or false based on if the object has particular property

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "utkarsh"
}

const {courseInstructor} = course // from which object you want to extract values from

console.log(courseInstructor);

const {courseInstructor: instructor} = course // destructuring the object
console.log(instructor);





