
// function sayMyName() {
//     console.log("hello world");
//     console.log("Upendra Tiwari");
//     console.log("X6fUz@example.com");
//     console.log("Delhi");
// }

// sayMyName()

// function AddTwoNumber(num1, num2) {
//     console.log(num1 + num2);
    
// }

// AddTwoNumber(10, 20)
// AddTwoNumber(4, "3")
// AddTwoNumber("4", "5")

function AddTwoNumber(num1, num2) {
    // let result = num1 + num2;
    // console.log("Upendra Tiwari");
    // return result // after return we can not use any other statement
    // same code can be written in single line as follows
    return num1 + num2
}

const result = AddTwoNumber(10, 20);
//console.log("result  ", result)

function LoginUserMessage(username="Sam") {
    // if (username === undefined) {
    //     console.log("Please provide username");
    //     return
        
    // }

    //the above code can be also written as below

    if(!username) {
        console.log("Please provide username");
        return
    }

    return `Welcome ${username} to our website`;
}

//console.log(LoginUserMessage("Upendra Tiwari"))

//console.log(LoginUserMessage()); // undefined

//Shopping Cart function

function calculateCartPrice(...num1) {
    // ... means rest operator
    return num1 
}

//console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    username: "Upendra",
    price: 399
}

//console.log(user.username, user.price);

//console.log(user["username"], user["price"]);

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

//Array

const myNewArray = [100, 200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1];
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 200, 300, 400, 500]));

