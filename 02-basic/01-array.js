//Array

const myArr = [1, 2, 3, 4, 5, "Upendra", true];
// console.log(myArr);

// const myArr2 = new Array (1, 2, 3, 4, 5, "Upendra", true, false);
// console.log(myArr2);
// console.log(myArr2.length);
// console.log(myArr2[0]);
// console.log(myArr2[1]);

// //Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.push(8);
// console.log(myArr);

// myArr.pop(); // remove last element

// myArr.shift(); // remove first element

// myArr.unshift(9); // add first element

// console.log(myArr.includes(1));
// console.log(myArr.indexOf("Upendra"));

// const newArr = myArr.join(" ");
// console.log(typeof newArr, newArr);
// console.log(typeof myArr, myArr);

// slice, splice, concat, reverse, sort

console.log("a", myArr);

const myn1 = myArr.slice(0, 3); // last index is not included
console.log("b", myn1);

const myn2 = myArr.splice(1, 4); // original array is modified
console.log("c", myn2);