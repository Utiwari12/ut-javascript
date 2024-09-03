const User = {
    _email: "harsh@gmail.com",
    _password: "abc",
    get email() {
        return this._email.toUpperCase();
    },
    set email(newEmail) {
        this._email = newEmail;
    },

    get password() {
        return this._password.toUpperCase();
    },
    set password(newPassword) {
        this._password = newPassword;
    }
}


const harsh = Object.create(User);
console.log(User.email);
console.log(User.password);
console.log(harsh.email);
console.log(harsh.password);