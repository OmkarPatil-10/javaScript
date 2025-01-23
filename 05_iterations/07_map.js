// .map()  -> 


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10 )
// console.log(newNums);  // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]



// ** chaining method  (chain)

const newNums = myNumbers
                    .map( (num) => num * 10 ) 
                    .map( (num) => num + 1)     // here the changes made on upper chain passes to lower chain 
                    .filter( (num) =>  num > 40)


console.log(newNums);