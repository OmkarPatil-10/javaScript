class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username }`);
        
    }

    // "static" >> avoid to access of this object that are instanctiate from this class; not give access of that property
    static createId(){
        return `123`
    }
}

const omkar = new User("Omkar")
// console.log(omkar.createId());


class Teacher extends User {
    constructor(username,  email){
        super(username);
        this.email = email

    }
}

const app = new Teacher("app", "app@gmail.com")

app.logMe()
console.log(app.createId());  // even in child node we dont get acess of static property
