//Object properties
//const descriptor = Object.getOwnPropertyDescriptor(Math, "PI").value;

//console.log(Math.PI);// 3.14

//Math.PI = 5;

//console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

//console.log(descriptor)

//const mynewObject = Object.create(null)

//console.log(mynewObject)

const chai = {
    name: "Tata Chai",
    price: 399,
    isAvailable: true,

    orderChai: function () {
        console.log("Ordering Chai");
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    //writable: false,
    enumerable: true,
    //configurable: false,
    //iteratable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {

    //console.log(`${key}, :- ${value}`);
    if(typeof value != "function"){
        console.log(`${key}, :- ${value}`);
    }
    
}