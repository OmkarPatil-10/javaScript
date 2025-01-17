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

// console.log("Result:", result);


function userLoginMessage(username = "user") {
    if(!username){
        console.log("please enter a username")
    }
   
    return `${username} just logged in`
}

// console.log(userLoginMessage("OMKAR"));


function calculateCartPrice(val1, val2, ...num1) {          // (...) => rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 100)) // [ 500, 100 ] => bcz val1 = 200, val2 = 400


const user = {
    userName: "OMKAR",
    price: 599
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    userName: "OM",
    price: 499
})


const newArray = [200, 300, 600, 100]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([2, 54, 123, 73]));