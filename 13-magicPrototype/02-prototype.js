const myName = "Upendra    ";

//console.log(myName.trim().length);


let heroPower = {
    thor: "hammer",
    superman: "flying",
    ironman: "suit",

    getSuperManPower: function() {
        console.log(`Sperman power is ${this.superman}`);
    }

}

Object.prototype.upendra = function() {
    console.log(`Upendra is present in all objects`);
}

// Array.prototype.heyUpendra = function() {
//     console.log(`Upendra is present in all arrays`);
// }

heroPower.getSuperManPower();
//heroPower.upendra = "thor";
//console.log(heroPower.upendra);
//heroPower.upendra()
myName.upendra()
//myName.heyUpendra()
//heroPower.heyUpendra()

//inheritance

const User = {
    name: "Harsh",
    email: "ut@gmail.com",
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js Basics",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;
TASupport.__proto__ = Teacher;
console.log(TASupport);

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TeachingSupport);

let anotherUsername = "Nilam     ";

String.prototype.trueLength = function() {
    //return this.trim().length;
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Sohan".trueLength();
"team".trueLength();



