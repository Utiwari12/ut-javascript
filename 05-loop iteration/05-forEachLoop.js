const coding = ["js", "html", "css", "cpp", "java"];

// coding.forEach(element => {
//     console.log(element);  
// }); // correct code

// the above code can be also written as below

// coding.forEach( function(item) {
//     console.log(item);
// })

// the above code can be also written as below

// function printMessage(item) {
//     console.log(item);
// }
// coding.forEach(printMessage)

// the above code can be also written as below
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        name: "Upendra",
        skill: "js",
        isLoggedIn: true
    },
    {
        name: "Nilam",
        skill: "html",
        isLoggedIn: true
    },
    {
        name: "Sakshi",
        skill: "css",
        isLoggedIn: false
    }
]

myCoding.forEach((item) => {
    //console.log(item);
    //console.log(item.skill);
    console.log(item.name)
})