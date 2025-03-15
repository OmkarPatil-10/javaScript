// getter & setter : part 2 using function (old syntax)

function User (email,password){
    this._email = email;
    this._password = password;

    // old syntax
    Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function (value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function (value){
            this._password = value
        }
    })
}

const omkar = new User("omk@133.com", "om122")

console.log(omkar.password);
console.log(omkar.email);
