class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    logMe() {
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }

    // static createId(){
    //     //return Math.random().toFixed(2)*1000;
    //     return '123';
    // }

    createId(){
        return Math.random().toFixed(2)*1000;
        //return '123';
    }
}

const harshit = new User("Harshit", "X6fUz@example.com", "123");
harshit.logMe();
console.log(harshit.createId());

class  Teacher extends User{
    constructor(username, email, password, subject){
        super(username, email, password);
        this.subject = subject;
    }
}
const upendra = new Teacher("Upendra", "upendra@gmail", "123", "Javascript");
upendra.logMe();
console.log(upendra.createId());

