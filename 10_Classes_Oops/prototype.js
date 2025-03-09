// let myName = "omkar   "
// let surName = "patil   "

// console.log(myName.truelength);


let myHero = ["thor", "hulk"]

let heroPower = {
    thor: "hammer",
    hulk: "smash",

    getHulkPower: function(){
        console.log(`Hulk power is ${this.hulk}`);
        
    }
}

// adding new property to "Object"
Object.prototype.omkar = function(){
    console.log(`Omkar is present in all objects`);
}

// adding new property to "Array"
Array.prototype.heyOmkar = function(){
    console.log(`Omkar say hello`);
}

// heroPower.omkar()    // <= accessing newly added Object property 
// myHero.omkar()       // <= accessing newly added Object property in "Array" [As object has high hireachy]

// myHero.heyOmkar()   // <= accessing newly added Array property 
// heroPower.heyOmkar()     // <= acsessing newly added Array property in "Object" [not avaiable]



//## inheritance 

const User = {
    name: "Omkar",
    email: "omkar@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__ : TeachingSupport    //<= inherited
}

// in another way to inheritance 
Teacher.__proto__ = User 

//new syntax to inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)  // here TeachingSupport accessing properties of Teacher


let anotherUsername = "OmkarPatil   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"lostOf".trueLength()
"legacy".trueLength()