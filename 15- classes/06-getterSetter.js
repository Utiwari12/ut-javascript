class User  {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    //getters and setters

    //getters

    get email() {
        return this._email.toUpperCase();
    }

    //setters

    set email(newEmail) {
        this._email = newEmail;
    }


    get password() {
        //return this._password.toUpperCase();
        return `password is ${this._password}harsh`;

    }

    set password(newPassword) {
        this._password = newPassword;
    }
 
}

const upendra = new User("upendra@gmail", "123abc");

console.log(upendra.email);
console.log(upendra.password)