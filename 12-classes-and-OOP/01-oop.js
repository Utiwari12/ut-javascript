// Object literals
const user = {
    username: "Upendra",
    loginCount: 10,
    signedIn: true,
    price: 399,
    
    welcomeMessage: function () {
        //console.log(`Welcome ${this.username} and price is ${this.price}`);
        console.log(this);
    },

    getUserDetails: function () {
        console.log("Got user details from Database");
    }
}
console.log(user);
//console.log(user.username, user.price, user.loginCount, user.signedIn);
console.log(user.welcomeMessage());
console.log(user.getUserDetails());
console.log(this);

//constructor function
function User(username, loginCount, signedIn,isloggedIn, price) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.isloggedIn = isloggedIn;
    this.price = price;

    this.greeting = function () {
        console.log(`Welcome ${this.username} and price is ${this.price}`);
    }

    return this
}

const user1 = new User("Upendra", 10, true, true, 399);
const user2 = new User("Nilam", 11, true, false, 400);
console.log(user1);
console.log(user2);
//console.log(user1.constructor);
//console.log(user2.constructor);
