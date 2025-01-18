// global scope

//{} <= scope
var c = 300
let a = 300


//block scope 
if (true) {
    let a = 10 
    const b = 20
    // var c = 30
    console.log("INNER: ", a); 
    
}

console.log(a);
// console.log(b);
// console.log(c);