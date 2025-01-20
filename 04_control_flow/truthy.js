// Truthy & Falsy Value

const userEmail = []

if (userEmail) {
    console.log("Got Email");
}


// Falsy Value:
// false, 0, -0, BigInt -> 0n , "", null, undefined, NaN

// Rest all are Truthy Value 
// Truthy Value e.g:
// "0", 'false', " ", [], {}, function(){}


// to check the array

// if (userEmail.length === 0) {
//     console.log("Array is Empty");  
// }


// to check empty obj 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}




// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 


console.log(val1);




// Terninary Operator 

// condition ? true : false

const iceCreamPrice = 100
iceCreamPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

