const clock = document.getElementById("clock")
//const clock = document.querySelector("#clock") //same result as above

//let date = new Date();
//console.log(date.toLocaleDateString());
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let amPm = hours >= 12 ? "PM" : "AM";
// hours = hours % 12;
// hours = hours ? hours : 12;

// clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${amPm}`

// setInterval(digitalClock, 1000);

// function digitalClock() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amPm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12;
//     hours = hours ? hours : 12;
//     clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${amPm}`
// }

//The above code is same as below code

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

