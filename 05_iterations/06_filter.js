// forEach() don't return any value even if we use "return"  

// const coding = ["js", "ruby", "java", "python", "Cpp" ]

// let memory =   coding.forEach( (item) => {
//         // console.log(item)
//         return item
// } )

// console.log(memory);



// 1. Filter()  --> use to peform any operation in array/object or just return value 
//->> first it checks each value in array like forEach() but we have to apply some condition on it => if that value is "true" then it return value

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter( (num) =>  (num >= 5) )
// console.log(newNums);   //  [ 5, 6, 7, 8, 9, 10 ]



// in forEach

// const newNums = []

// myNums.forEach( (nums) => {
//     if(nums >= 5 ){
//         newNums.push(nums)
//     }
// })

// console.log(newNums);   // [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'The Silent Patient', genre: 'Thriller', publish: 2019, edition: 2020 },
    { title: 'Atomic Habits', genre: 'Self-Help', publish: 2018, edition: 2021 },
    { title: 'Dune', genre: 'Science Fiction', publish: 1965, edition: 2021 },
    { title: 'Becoming', genre: 'Biography', publish: 2018, edition: 2019 },
    { title: 'To Kill a Mockingbird', genre: 'Classic', publish: 2001, edition: 1999 },
    { title: 'The Great Gatsby', genre: 'Classic', publish: 1925, edition: 2004 },
    { title: 'Sapiens', genre: 'History', publish: 2011, edition: 2015 },
    { title: 'Harry Potter and the Philosopher\'s Stone', genre: 'Fantasy', publish: 1997, edition: 2014 },
    { title: 'The Alchemist', genre: 'Adventure', publish: 1988, edition: 2018 }
  ];
  
  let userBooks = books.filter( (bk) => bk.genre === 'Classic' )

  userBooks = books.filter( (bk) => bk.publish >= 2000 && bk.genre == 'Classic' )

  console.log(userBooks);
  
  