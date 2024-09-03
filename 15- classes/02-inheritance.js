class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        
    }
    logMe(){
        console.log(`Username: ${this.username}, Email: ${this.email}`); 
    }
}

// we can rename this user to new class as below

class Teacher extends User {
    constructor(username, email, password, subject) {
        super(username, email, password);
        this.password = password;
        this.subject = subject;
    }

    // we can also add methods in the child class
    addCourse(course) {
        
        this.course = course;
        console.log(` A new course is added by ${this.username}, Course added: ${this.course}`);
        //return this.course;
    }
}

const chai = new Teacher("Upendra", "X6fUz@example.com", "123", "Javascript");
console.log(chai);
chai.logMe();
chai.addCourse("React");

const sakshi = new User("Sakshi", "sakshi@gmail", "123", "Java");
//sakshi.addCourse("Python");
sakshi.logMe();
console.log(sakshi);
// console.log(chai === sakshi);
// console.log(chai === Teacher);
// console.log(chai instanceof Teacher);
// console.log(sakshi instanceof User);
// console.log(chai instanceof User);
