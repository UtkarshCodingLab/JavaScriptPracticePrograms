let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let myCreatedDateAndTime = new Date(2023,0,23,5,3)
console.log(myCreatedDateAndTime.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //will give output in milliseconds
console.log(myCreatedDate.getTime()); //function to give output in milliseconds

console.log(Math.floor(Date.now()/1000)); //will give output in seconds

let newDate = new Date()
console.log(newDate.getMonth()+1); //get Value of Month from 1 to 12 (both inclusive)