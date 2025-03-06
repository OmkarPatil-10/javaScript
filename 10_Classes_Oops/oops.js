//object literal

const user = {
    username: "omkar",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this)
        
    }
}
// const name = "omkar patil"


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// new() --> it generate new instance of same property & value
            // also know as Constructor
// const promise = new promise()
// const date = new date()



function users(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        // console.log(`welcome ${this.username}`);
        
    }

    return this    //<< implict written (by default)

}

const user1 = new users("omkar",5, true)
const user2 = new users("patil", 9, false)
console.log(user1.constructor)
console.log(user2)