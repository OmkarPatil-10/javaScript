// getter & setter Part 1: with Classes 

// getter & setter are used to set /changes properties..



class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //get... whatever properties we defined it automatically treated as object in getter & setter

    //getter return value 
    get password(){
        return this._password.toUpperCase()  
    }

    // if "get" is defined we must defined "set" to set the value 
    set password(value){
        this._password = value  // "_password" is used bcz of Maximum call stack size exceeded  [if not it will conflict with constructor() ]
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    // _email , _password are pvt 
}

const omkar = new User("Omkar@gmail.com", "Omkar123")

console.log(omkar.password);
console.log(omkar.email);

