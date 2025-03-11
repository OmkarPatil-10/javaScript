class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


// here "extends" is used inherit the user class 
class Teacher extends User{
    constructor(username, email, password){
        // "super" refer which class it extend... also it adds "this"
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const hero = new Teacher("hero_MCU", "marvel@gamil.com", "28107")

hero.addCourse()


const pokemon = new User("pokemon")
pokemon.logMe()


console.log(hero instanceof Teacher);
