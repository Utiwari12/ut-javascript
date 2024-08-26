const name = "Upendra Tiwari";
const email = "X6fUz@example.com";
const city = "Delhi";

//console.log(name + " " + email + " " + city);
//console.log(`Hello, my name is ${name} , email is ${email} and city is ${city}`); // used back tick in modern javascript
//console.log(name, email, city);

const userName = new String("Upendra Tiwari");
// console.log(userName [0]);
// console.log(userName.length);
// console.log(userName.__proto__);
// console.log(userName.__proto__.__proto__);
// console.log(userName.__proto__.__proto__.__proto__);
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.trim());
// console.log(userName.split(" "));
// console.log(userName.slice(0, 5));
// console.log(userName.substr(0, 5)); //last index is not included
// console.log(userName.charAt(2));
// console.log(userName.indexOf("Tiwari"));
// console.log(userName.lastIndexOf("Tiwari"));

const anotherString = userName.slice(-9, -8);
console.log(anotherString)

const url = "www.google.com/search?q=upendra tiwari";
console.log(url.replace("upendra", "nilam"));
console.log(url.includes("sakshi"));