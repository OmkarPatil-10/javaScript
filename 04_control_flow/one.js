// Control flow

//  1. if Statement

const isUserLoggedIn = true
const temperature = 25

// if ( temperature === "25" ){
//     console.log("True Statement")
// } else {
//     console.log("False Statement")
// }

// comparsion operator
// <, >, <=, >=, !=, ==, ===, !==


// # Block Scope
const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`)


// ShortHand Notation 

const balance = 1000

// if(balance > 500) console.log("test");   //implict scope 



// Nesting 

// if (balance < 500 ){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900")
// }  else {
//     console.log("less than 1200")
// }


const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true

if (userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromEmail || guestUser ){
    console.log("User Logged In");
}