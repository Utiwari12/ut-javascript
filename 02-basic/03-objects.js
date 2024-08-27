//singleton object

//object.create


const mySymbol = Symbol("key1");

//object literals
const jsUser = {
    name: "Upendra",
    "full name": "Upendra Tiwari",
    [mySymbol]: "key1",
    age: 50,
    email: "X6fUz@example.com",
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

//console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

// jsUser.email = "ut@gmail.com";
// console.log(jsUser.email);

// Object.freeze(jsUser);
// jsUser.email = "ut2@gmail.com";
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello world");
}
jsUser.greeting();

jsUser.greetingTwo = function() {
    console.log(`Hello, my name is ${this.name} and email is ${this.email}`);
}
jsUser.greetingTwo();
console.log(jsUser.greetingTwo());
console.log(jsUser.greetingTwo);


