"use strict";  // treat's all JS code as newer version 

// alert(3 + 3)  <-- we are using node.js, not browser 

let name = "omkar"
let age = 18 
let isLoggedIn = false


// Primitive DataType

// number => 2 to power 53        <-- gives the range of mem addr (mantissa bit ) 
// biginit           <-- usally use for when our number is long
// string => ""      
// boolean => true/false
// null    <-- stanalone value [ it represent the "empty value" of the variable ]
// undefine  <-- when the variable created but no value is assigned to it [dataType is not assigned]
// symbol    <-- used for finding "uniqueness" of any component



//object 

console.log(typeof "omkar");     // string
console.log(typeof age);         // number   
console.log(typeof null);        // object
console.log(typeof undefined);   // undefined   