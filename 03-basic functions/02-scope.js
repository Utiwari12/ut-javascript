// let a = 10
// const b = 20
// var c = 30

//console.log(a, b, c);
//console.log(a);
//console.log(b);
//console.log(c)

//{}  //  scope

//var c = 100

let a = 100 // global scope

if (true) {
    let a = 10
    const b = 20
    //console.log("Inner", a, b);
    //var c = 30
}  // block scope

//console.log(a);
//console.log(b);
//console.log(c)

//nested scope

function one(){
    const username = "Upendra"

    function two(){
        const website = "upendra.com"
        console.log(username);
    }
    //console.log(website); // not allowed

    two()
}

//one()

//if else scope

if (true) {
    const username = "Upendra"

    if(username === "Upendra") {
        const website = "upendra.com"
        //console.log(username + " " + website); // allowed

    }

    //console.log(website); // not allowed
    
}

//console.log(username); // not allowed

//************ Interesting */

function addone(num){
    return num + 1
}

console.log(addone(10))

//addtwo(10) // not allowed
const addtwo = function(num) {
    return num + 2
}

console.log(addtwo(10))



