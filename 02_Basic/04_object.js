// const discordUser = new Object ()    // <-- singleton object 
const discordUser = {}      // <-- non-singleton object 

discordUser.id = "1233"
discordUser.name = "om"
discordUser.isLoggedIn = false 


// console.log(discordUser);

const regularUser = {
    email : "abc@gmail.com",
    fullname : {
        userFullName: {
            firstname: "omkar", 
            lastname: "patil"
        }
    }
}

// console.log(regularUser.fullname.userFullName.lastname);        // <-- acessing the nested object 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//++++ combine the object ++++

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2 )

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    
    },
    {
        id: 2,
        email: "def@gmail.com"
    
    },
    {
        id: 1,
        email: "ghi@gmail.com"
    
    },
]
users[1].email
// console.log(discordUser);

// console.log(Object.keys(discordUser));
// console.log(Object.values(discordUser));
// console.log(Object.entries(discordUser));

// console.log(discordUser.hasOwnProperty('isLoggedIn'));  // true
// console.log(discordUser.hasOwnProperty('score'));  // false


//++++ Destructuring ++++
 
const course = {
    courseName : "JavaScript Full Course",
    price: "9999",
    courseInstructor: "Omkar"
}

// course.courseInstructor

const {courseInstructor: instructor} = course       // <-- destructuring

// console.log(courseInstructor); 
console.log(instructor);


// ++++ JSON ++++ [API]

// {
//     "name": "omkar",
//     "city": "mumbai",
//     "country": "india"
// }


// in array format
[
    {},
    {},
    {}
]





