// ES6 Class and constructors

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `Encrypted password is ${this.password}abc`;
//   }
//   changedUsername(newUsername) {
//     this.username = newUsername;
//     return `New username is ${this.username.toUpperCase()}`;
//   }
// }

// const harshit = new User("Harshit", "X6fUz@example.com", "123");
// console.log(harshit);
// console.log(harshit.encryptPassword());
// //console.log(harshit.changedUsername());
// console.log(harshit.changedUsername("nilam tiwari"));

// behind the scene ,how it works

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.changeUsername = function (newUsername) {
  //this.username = newUsername;
  return `New username is ${this.username.toUpperCase()}`;
}

User.prototype.encryptPassword = function () {
  return `Encrypted password is ${this.password}abc`;
}

const tea = new User("tea", "X6fUz@example.com", "123");
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUsername());