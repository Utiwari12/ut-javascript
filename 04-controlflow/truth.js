const userEmail = "ut@gmail.com";

if (userEmail) {
    console.log("Email is present");
} else {
    console.log("Email is not present");
}

// falsy values as below
// 0
// -0
// BigInt => 0n
// ""
// undefined
// null
// NaN
// false

// truthy values as below
// "0"
// " "
// []
// {}
// 1
// -1
// 1n
// true
//"false"
// function(){}

// if(userEmail.length === 0){
//     console.log("Email is not present");
// }


// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");  
// }

// Nullish coalescing operator(??) as below
// null
// undefined

//let val1 = null ?? "default value";
let val1;
//val1 = 5 ?? 10;

//val1 = null ?? 10

//val1 = undefined ?? 15;

//val1 = null ?? 10 ?? 15;
val1 = null?? 15 ?? 10;
console.log(val1);

// Ternary operator as below

// condition ? trueValue : falseValue

const isceTeaPrice = 100;
//const teaPrice = isceTeaPrice ? 100 : 50;
//console.log(teaPrice);
isceTeaPrice<=80 ? console.log("Tea is less than 80") : console.log("Tea is greater than 80");

