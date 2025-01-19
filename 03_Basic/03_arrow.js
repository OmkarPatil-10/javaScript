const user =  {
    username: "OMKAR",
    price: 6999,

    welcomeMessage: function (){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()   //OMKAR, Welcome to website

// user.username = "OM"
// user.welcomeMessage()   //OM, Welcome to website

// console.log(this);   // {}


// function code(){
//     let username= "Omkar"
//     console.log(this.username)
// }


// const code = function (){
//     let username= "Omkar"
//     console.log(this.username)
// }


const code =  () => {
    let username= "Omkar"
    console.log(this);
}

// code()


// ++++ arrow function 
// () => {}

// Basic arrow function 
// const addTwo = (num1, num2 ) => {
//     return num1 + num2
// }

// console.log(addTwo(9,12))



// implict return arrow function 
// const addTwo = (num1, num2) =>  num1 + num2     // => direct return 
// console.log(addTwo(9,12))


// const addTwo = (num1, num2) =>  (num1 + num2)     
// console.log(addTwo(9,12))


// returning the object direct implict arrow function 
// const addTwo = (num1, num2) =>  ({username: "Omkar"})    
// console.log(addTwo(9,12))    

