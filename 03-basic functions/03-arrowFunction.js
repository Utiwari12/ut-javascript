// const user = {
//     username: "Upendra",
//     price: 399,

//     welcomeMessage: function () {
//         console.log(`Welcome ${this.username} and price is ${this.price}`);
//         console.log(this);
//     } // this refers to current context

// }

//user.welcomeMessage()
//user.username = "Nilam"  // update the value
//user.welcomeMessage()

//console.log(this); // o/p empty object

// function ut(){
//     let username = "Upendra";
//     //console.log(this); // o/p defined object
//     console.log(this.username); // o/p undefined
// }

// ut()

// const ut =  () =>{
//     let username = "Upendra";
//     //console.log(this.username); // o/p undefined
//     console.log(this);  // o/p empty object
// }

// ut()

// const addTwo = (num1,num2)=> {
//     return num1 + num2
// }

// console.log(addTwo(10,20))

// Note If we use {} then we should  use return keyword
// Note if we use () then we should not use return keyword
//const addTwo = (num1,num2) =>  num1 + num2  //implicit return

//const addTwo = (num1,num2) => (num1 + num2)  // should not use return
 const addTwo = (num1,num2) => ({username: "Upendra", price: 499})
console.log(addTwo(10,20))

