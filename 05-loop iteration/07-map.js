const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNumbers = myNumbers.map((num) => num * 2);
//console.log(newNumbers)
//the above code can be also written as below
//const newNumbers = myNumbers.map((num) => {
    //return num * 2
//})

//console.log(newNumbers)

//chaining

const newNums = myNumbers
                .map((num)=> num * 10)
                .map((num)=> num + 2)
                .filter((num)=> num >= 50)

console.log(newNums)
