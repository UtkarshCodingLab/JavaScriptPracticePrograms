// Immediately Invoked Function Expressions (IIFE)

/*
Objective:
-> To Immediately establish Database Connection as soon as we run the application
->  Local scope don't get polluted with global scope (To remove global scope pollution)
*/

(function chai() { // Named IIFE
    console.log(`DB CONNECTED`);
})(); //semicolon(;) indicates end the context of iife function

( () => {  // Simple IIFE
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
  console.log(`DB CONNECTED THREE ${name}`);
})(`utkarsh`)