const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myTotalAmount = myNums.reduce((acc, currentvalue) => {
//     console.log(`acc: ${acc}, currentvalue: ${currentvalue}`);
//     return acc + currentvalue
// }, 0)

// the above code can be also written as below

// const myTotalAmount = myNums.reduce( (acc, currentvalue) => {
//     console.log(`acc: ${acc}, currentvalue: ${currentvalue}`);
//     return acc + currentvalue
    
// },0)

// the above code can be also written as below
 
// const myTotalAmount = myNums.reduce( (acc, currentvalue) => acc + currentvalue,0)

// console.log(myTotalAmount)

const shoppingCart = [
    {
        itemName: "shoes",
        price: 1200
    },
    {
        itemName: "t-shirt",
        price: 200
    },
    {
        itemName: "pant",
        price: 300
    },
    {
        itemName: "belt",
        price: 50
    }
]


const totalAmount = shoppingCart.reduce((acc, currentvalue) => acc + currentvalue.price, 0)

console.log(totalAmount)