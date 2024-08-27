
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

console.log(LoginUserMessage()); // undefined