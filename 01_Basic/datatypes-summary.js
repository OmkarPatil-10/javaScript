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