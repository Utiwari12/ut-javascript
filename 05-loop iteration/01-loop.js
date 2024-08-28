//for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         //continue;
//         console.log("5 is best number");
//         //break; 
//     }
//     console.log(element);
    
// }

//Multiplocation table of 1 to 20

// for (let i = 1; i <=20 ; i++) {
//     console.log(`Outer loop value ${i}`);
//     for(let j = 1; j <= 10; j++) {
//        // console.log(`Inner loop value ${j} and inner loop ${i}`);
//        console.log(i + '*' + j + ' = ' + i*j);
//     }  
// }

// let myArray = ["flash", "arrow", "superman", "batman"];
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

// break and continue

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5, stopping the loop`);
        break;
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5, continuing the loop`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}