function multiplyBy5(num){
    this.num = num
    return num * 5
}
console.log(multiplyBy5(10))
multiplyBy5.power = 2
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); //output {}

function createUser(username, score) {
    this.username = username
    this.score = score  
}

createUser.prototype.increaseScore = function() {
    this.score++
}

createUser.prototype.greet = function() {
    console.log(`Hello ${this.score}`);
}

const user1 = new createUser("upendra", 10)
const user2 = new createUser("sakshi", 20)
console.log(createUser)
user1.greet();
user2.greet();
//user1.increaseScore();

/*
// notes for remember
// this keyword points to the current context
What happens when new ketword is used ?

1. new keyword is used to create an object: The new Keyword initiates the creation of a new javascript object.

 2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.

3. The constructor function is called: The constructor function is called with the newly created object as its this value.

4. The new object is returned: The new keyword returns the newly created object.

*/