// array

const myArr = [1, 2, 3, 4, 5, 6]
const myHeros = ["ironMan", "spiderMan", "hulk"]

const myArr2 = new Array(9, 8, 7, 6)        // ->> new way of declaring array

// console.log(myArr[3]);      // 4


// array methods

// myArr.push(9)       // ->> add the new element to the array
// myArr.pop()     // ->> remove the last element from the array

// myArr.unshift(12)       // ->> "adds" the new element "at start" of the array
// myArr.shift()       // ->> "remove" the element from the "beginning" of array

// console.log(myArr.includes(5));  // true ->> shows the element is present or not 
// console.log(myArr.indexOf(7));  // -1 ->> shows the specified elemnt index 

// const newArr = myArr.join()     // ->> convert the array into the string

// console.log(myArr);     // [ 1, 2, 3, 4, 5, 6 ]
// console.log(newArr);    // 1, 2, 3, 4, 5, 6 



// slice, splice 

console.log("A", myArr);    // A [ 1, 2, 3, 4, 5, 6 ]

const arr1 = myArr.slice(1,3)   // ->> slice the array from the specified range "without manipulating" the original array
console.log(arr1);  // [ 2, 3 ]
console.log("B",myArr);     // B [ 1, 2, 3, 4, 5, 6 ]

const arr2 = myArr.splice(1,3)  // ->> slice the array from the specifed range "by manipulating" the original array [all range consider] 
console.log(arr2);      // [ 2, 3, 4 ]
console.log("C",myArr);   // C [ 1, 5, 6 ]