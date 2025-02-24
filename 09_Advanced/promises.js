// fetch('https://example.com').then().catch().finally() // this how we consume promises


//# creating Promises => promise is an "object representing" the eventual completion or failure 


// reslove() ---> then()
const promiseOne = new Promise(function(reslove, reject){
    //  do an async tasks
    // DB call, cryptography, networks call
    setTimeout(function(){
        console.log('Async tasks is complete');
        reslove()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(reslove, reject){
    setTimeout(function(){
        console.log("Async tasks 2");
        reslove()
    },1000)
}).then(function(){
    console.log("Async 2 resloved");
    
})

const promiseThree = new Promise(function(reslove, reject){
    setTimeout(function(){
        reslove({username:"omkar", email:"promomkar@gmail.com"})
    },1000)
})

//passing the value 
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = false 
        if (!error) {
            reslove({username:"Omkar10", email: "promomkar@gmail.com", password:"1234"})
        } else {
            reject('ERROR: Something went wrong')
        }

    },1000)
})


// chaining --> thenable 
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch( function(error){
    console.log("error");
})
.finally(() => console.log("The Promise is either resloved or rejected"))

const promiseFive = new Promise( function(reslove,reject){
    setTimeout(function(){
        let error = false 
        if (!error) {
            reslove({username:"JavaScript", email: "promomkar@gmail.com", password:"123"})
        } else {
            reject('ERROR: JS went wrong')
        }

    },1000)
})

async function consumePromiseFive (){
   try{
        const response =  await promiseFive 
        console.log(response);
   } catch(error){
        console.log(error);
   }
   
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch (error){
//         console.log("E:", error);       
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error) )