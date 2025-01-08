// singleton 
// Object.create  <-- constructor 


// ++++++++++ object literal +++++++++++++++

const mySym = Symbol("key1")    // ->> Symbol

const JsUser = {
    name: "Omkar",
    "full name": "Patil",
    [mySym]:" myKey1",      // ->> declaring the Symbol
    age: 19,
    location: "mumbai",
    email: "omkar@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Thursday"]
}
// console.log(JsUser);

// console.log(JsUser.email);      // ->> acess the object
// console.log(JsUser["email"]);   // ->> efficent way to acess the object value
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);     // ->> acessing the Symbol 


// Change the value of the key in object 
JsUser.email = "patil@gmail.com"
// console.log(JsUser["email"])

// locking the particular object: frezze()
// Object.freeze(JsUser)
JsUser.email = "omkarpatil@gmail.com"
// console.log(JsUser)


// +++++ Adding Function into object +++++

JsUser.greeting = function (){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function (){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());