// Singleton object (created with the help of constructor) Syntax: object.create

// object literals (multiple instances of it can be created)

const mySym = Symbol("Key1") // defining Symbol and Storing a value in it 

const JsUser = {
    name: "utkarsh", // By default key_name is considered as string
    age: 23,
    location: "Jaipur",
    email: "utkarsh@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1"
}

console.log(JsUser.email)
console.log(JsUser["email"]) // other way to access field

console.log(JsUser[mySym]) // accessing symbol inside object

JsUser.email = "utkarsh@chatgpt.com" // overwriting value of variable in object

Object.freeze(JsUser) // No Changes will be applied to the object 'JsUser' after you freeze JsUser object

JsUser.email = "utkarsh@microsoft.com"

console.log(JsUser);