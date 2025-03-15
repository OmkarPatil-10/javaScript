// getter & setter : part 3 in "Object"

const User = {
    _email : 'om@gmail.com',
    _password: 'pass123',

    get email(){
        return this._email.toUpperCase()
    },

    set password(value){
        this._email = value
    }
}

// factory function to create Object
const hero = Object.create(User)

console.log(hero.email);
