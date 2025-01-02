// Primitive:

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = "100"           // string 
const scoreValue = 100.33     // number
const isLoggedIn = false      // boolean  
const outSideTemp = null      // null  
let userEmail;                // undefined  

const id = Symbol("1234")               // symbol 
const anotherId = Symbol("1234")
console.log(id != anotherId);

const bigNumber = 4.338473243004705e+36    // BigInt



// Refrence [Non-Primitive]:

// Array, object, Function

const heros = ["ironMan", "spiderMan", "hulk"];    //array [object]
let myObj = {                                    // object                        
    name: "omkar",
    age: 20,
}

let myFunction = function(){                    //function [function Object]
    console.log("Omkar Patil");
}



console.log(typeof bigNumber);










// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)


// 1. Stack (Primitive)
let myUserName = "OmkarPatil-10"

let anotherName = myUserName
anotherName = "Omkar10"

console.log(anotherName);
console.log(myUserName);


// 2. Heap (Non-Primitive)

let userOne ={
    email: "example@gmail.com",
    id: 1234, 
}

let userTwo = userOne

userTwo.email = "sample@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);