const balance = new Number(100); // Explicitly defining the balance will be of type Number
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2)); // Set Precision upto 2 decimal places

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // will return string upto 3 places including decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // representing number according to Indian Standard

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); // will give values between 0 and 1 (both inclusive)

console.log((Math.random()*10)+1); // will give values between 1 and 10 (both inclusive)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min); // whole values between 11 and 20 (both inclusive)