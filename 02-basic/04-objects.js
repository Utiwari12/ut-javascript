//singleton object

//const user = new Object(); //singleton object

const user = {}  // non singleton object

user.id = "1234asd";
user.name = "Upendra";
user.age = 25;
user.email = "X6fUz@example.com";

//console.log(user);

const regularUser = {
    email: "ut@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Upendra",
            lastname: "Tiwari"
        }
    }
};

//console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1: "a", 2: "b", 3: "c"}; 
const obj2 = {4: "a", 5: "b", 6: "c"};

//const obj3 = {...obj1, ...obj2}; // spread operator

//const obj3 = Object.assign(obj1, obj2); // same o/p as above

const obj3 = Object.assign({}, obj1, obj2); // same o/p as above
// console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("email"));

//console.log(Object.is(obj1, obj2));

//destructuring of object

// const course = {
//     coursename: "JavaScript",
//     price: 100,
//     courseInstructor: "Upendra Tiwari",
//     courseStudents: ["Upendra", "Nilam", "Rajesh"],
// }

//const {coursename, price, courseInstructor: instructor, courseStudents} = course;
//console.log(instructor);

 //const navbar = ({company}) => {} //destructuring

//navbar(company = "Google");

//console.log({company});

//json => javascript object notation
//API => application programming interface
// {
//     "name": "Upendra",
//     "coursename": "JavaScript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
