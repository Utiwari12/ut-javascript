const promiseOne = new Promise(function (resolve, reject) {
  // Do an asynchronous operation
   
  //DB calls, cryptography, network calls
  setTimeout(() => {
    console.log("Async operation is done");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

//the above code can be written as

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async operation 2 is done");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise 2 consumed");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async operation 3 is done");
//     resolve({
//         username: "Upendra",
//         email: "X6fUz@example.com"
//     });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
//   console.log("Promise 3 consumed");
// });

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //let error = true;
    let error = false;
    if (!error) {
    console.log("Async operation 4 is done");
    resolve({
        username: "Upendra",
        email: "X6fUz@example.com",
        password: "123",

    });
    } else {
        reject('Error:Something went wrong');
    }
  }, 1000);
});

promiseFour.then(
    (user) => {
        console.log(user);
        return user.username
    }
).then(
    (username) => {
        console.log(username);
    }
).catch(
    function(error) {
        console.log(error);
    }
).finally(
    function() {
        console.log("Finally The Promise 4 is either resolved or rejected");
    }
)

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //let error = true;
    let error = false;
    if (!error) {
    console.log("Async operation 5 is done");
    resolve({
        username: "JavaScript",
        email: "X6fUz@example.com",
        password: "123",

    });
    } else {
        reject('Error:JS went wrong');
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
  console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}

consumePromiseFive();

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
// }

// getAllUsers();

// the above code also can be wrapped into try catch block

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

//the above code alos wrapped into .then .catch block

async function getAllUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

getAllUsers();


