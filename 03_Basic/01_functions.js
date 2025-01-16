function sayMyName() {
    console.log("O");
    console.log("M");
    console.log("K");
    console.log("A");
    console.log("R");
}

// sayMyName()

// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2){
    
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(5, 9)

console.log("Result:", result);


function userLoginMessage(username = "user") {
    if(!username){
        console.log("please enter a username")
    }
   
    return `${username} just logged in`
}

console.log(userLoginMessage("OMKAR"));