// Primitive Data Types
// 1. number
// 2. string
// 3. boolean
// 4. null  => empty
// 5. undefined
// 6. symbol
// 7. bigint

// const score = 10;
// const scoreValue = 10.5;

// const isLoggedIn = false;
// const outsideTemp = null;
// const state = undefined;
// let userName;

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId); // false

 const bigint = 34567890123n;
 console.log(typeof bigint, bigint);

// Reference Data Types or non-primitive
// 1. object
// 2. function
// 3. array

const person = {
    name: "Upendra",
    age: 25,
}; // object
console.log(typeof person, person) 

const arr = [1, 2, 3, 4, 5]; // array
console.log(typeof arr, arr)

const func = function()  {
    console.log("I am function");
}; // function

console.log(typeof func, func)