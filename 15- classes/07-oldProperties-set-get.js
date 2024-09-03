function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function() {
            //return this._email;
            return this._email.toUpperCase();
        },
        set: function(newEmail) {
            this._email = newEmail;
        }
    });

    Object.defineProperty(this, "password", {
        get: function() {
            return this._password;
        },
        set: function(newPassword) {
            this._password = newPassword;
        }
    });

}

const harsh = new User("harsh@gmail.com", "chai");

console.log(harsh.email);
console.log(harsh.password);