//const coding = ["js", "html", "css", "cpp", "java"];


// const values = coding.forEach(element => {
//     //console.log(element); // o/p defined
//     return element 
// }); // correct code

// console.log(values); // o/p undefined // wrong code
//filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.filter((num)=> num > 4)

//the above code can be also written as below
// const newNums = myNums.filter((num) => {
//     return num > 4
// })

//the above code can be also written as below
// forEach loop
// const newNums = []

// myNums.forEach((num)=> {
//     if(num > 4) {
//         newNums.push(num)
//     }
//     //return num
// })

// console.log(newNums)


const books = [
    {title: "name of the wind", author: "patrick rothfuss", year: 2002},
    {title: "the way of kings", author: "brandon sanderson", year: 2000},
    {title: "the final empire", author: "brandon sanderson", year: 2000},
    {title: "the long road", author: "brandon sanderson", year: 1999},
    {title: "nobles", author: "patrick ", year: 2003},
    {title: "fiction", author: "Bed ", year: 2004},
    {title: "mythology", author: "brandon", year: 2005},
    {title: "fellowship of the ring", author: "brandon", year: 2006},
    {title: "the prince", author: "Kalidas", year: 2007},
    {title: "The Hobbit", author: "Karmbir", year: 2008},
    {title: "The art of war", author: "Jain", year: 2009},
]

const userBooks = books.filter((book) => {
    return book.year > 2004 && book.author === "brandon"
})

console.log(userBooks)