// reduce() -> this method has accumulator & currentValue

// by Default the accumulator value is intial value of array; but we assign/set accumulator value
// by Default the currentValue is second value of array bcz accumulator contain inital value; but when we assign accumulator value then currentValue contain inital value of array

const myNums = [ 1, 2, 3]

// const myTotal = myNums.reduce( function (acc, curVal) {
//     console.log(`acc: ${acc} & curVal: ${curVal},`); // acc: 0 & curVal: 1,  acc: 1 & curVal: 2,  acc: 3 & curVal: 3
//     return acc + curVal
// }, 0)


// in arrow func
const myTotal = myNums.reduce( (acc, val) => ( acc + val) ,0)

console.log(myTotal);   // 6



const shoppingCart = [
    {
        itemName: "JS MERN",
        price: 9999
    },
    {
        itemName: "python + DSA",
        price: 8999
    },
    {
        itemName: "java + DSA",
        price: 11999
    },
    {
        itemName: "Machine Learning",
        price: 14999
    },
]

const payDue = shoppingCart.reduce( (acc, item) => (acc + item.price ), 0)
console.log(payDue);

