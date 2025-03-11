// ES6
  
// class User {
//     // Whenever the "new()" is called then constructor get excuted
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }  
    
//     //method 
//     encryptPassword(){
//         return `${this.password}abc221`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const hero = new User("hero", "hero@gmail.com", "123")

// console.log(hero.encryptPassword());
// console.log(hero.changeUsername());



// behind the scene

function User(username, email, password){
    this.username = username;
        this.email = email;
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc221`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const student = new User("student", "student@gmail.com", "123")

console.log(student.encryptPassword());
console.log(student.changeUsername());