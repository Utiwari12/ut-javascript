function setUsername(username) {
    //complex DB calls
    this.username = username;
    
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;

    //return this;
}

const harshit = new createUser("Harshit", "X6fUz@example.com", "123");
console.log(harshit);