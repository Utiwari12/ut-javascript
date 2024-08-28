//if

// if (true) {
    
// } // code will execute

//if (false) {
    
//} // code will not execute

// console.log("");
// === strictly equal

// == loose equal

// != not equal

// !== not strictly equal

// > greater than

// < less than

// >= greater than or equal

// <= less than or equal

// && and gate

// || or gate

// ! not gate

// const temperature = 45;
// if (temperature===45) {
//     console.log("Temperature is 45"); 
// } else {
//     console.log("Temperature is greater than 50");
// }

// const score = 200;
// if (score>100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }  // block scope

//console.log(`User power: ${power}`); // not allowed

//shorthand notation

// const balance = 800;
// if (balance<500) {
//     console.log("Balance is less than 500");
    
// } else if (balance<750) {
//     console.log("Balance is less than 750");
// } else if (balance<1000) {
//     console.log("Balance is less than 1000");
// }
// else{
//     console.log("Balance is equal to 1000");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("User is logged in and has debit card then allow to purchase");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User is logged in from google or email then allow to purchase");
    
}