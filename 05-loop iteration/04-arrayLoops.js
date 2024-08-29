// for in loop

// Note to remember
// for object use for in loop
// for array use for of loop

const myObject = {
    js: 'JavaScript',
    html: 'HTML',
    css: 'CSS',
    cpp: 'C++',
    java: 'Java'
}

// for (const key in myObject) {
//     // if (myObject.hasOwnProperty.call(myObject, key)) {
//     //     const element = myObject[key]; 
//     // }
//     console.log(key, ':-', myObject[key]);
// }

const programmingLanguages = ["js", "html", "css", "cpp", "java"];
for (const key in programmingLanguages) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key]; 
    // }
    console.log(key, ':-', programmingLanguages[key]);
}

// const myMap = new Map();
// myMap.set("name", "Upendra");
// myMap.set("age", 25);
// myMap.set("isLoggedIn", true);

// for (const key in myMap) {
//     console.log(key, ':-', myMap[key]);
// }  
