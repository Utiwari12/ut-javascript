// for of loop

["", "", ""] 
[{}, {}, {}] // object in array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = ["hello", "how", "are", "you"];
// for (const greet of greetings) {
//     console.log(greet);
// }

//Maps

const myMap = new Map();
myMap.set("name", "Upendra");
myMap.set("age", 25);
myMap.set("isLoggedIn", true);
//console.log(myMap);

for (const [key, value] of myMap) {
    console.log(key, ':-', value);
    
}

// const myObject = {
//     game1: 'cricket',
//     game2: 'football',
//     'game3': 'hockey'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } //not working