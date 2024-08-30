const buttons = document.querySelectorAll(".button")
//console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const color = button.id;
        console.log(color);
        body.style.backgroundColor = color;
    })
})

//the above code can be written as below
// buttons.forEach(function(button) {
//     console.log(button);
//     button.addEventListener("click", function(e){
//         console.log(e)
//         console.log(e.target);
//         if (e.target.id === "grey") {
//             body.style.backgroundColor = e.target.id;
            
//         }
//         if (e.target.id === "green") {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === "blue") {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === "yellow") {
//             body.style.backgroundColor = e.target.id;
//         }
//     })
// })
