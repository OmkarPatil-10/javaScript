// global scope

//{} <= scope
var c = 300
let a = 300


//block scope 
if (true) {
    let a = 10 
    const b = 20
    // var c = 30
    // console.log("INNER: ", a); 
    
}

// console.log(a);
// console.log(b);
// console.log(c);


// +++++ Nested Scope +++++++

function one(){
    const username= "Omkar"

    function two (){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website)  <= not accesible

    two()
}

one()


if (true){
    const username = "OMKAR"
    if (username === "OMKAR") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website) <= not accesible
}

// console.log(username) <= not accesible



//  +++++++++ Hoisting concept ++++++++++

console.log(addOne(5))  // <= this can be call anywhere i.e before & after the function made 

function addOne (num){
    return num + 1
}



// it is function but it called as "Expression"
const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5)) // <= this called after the function is made