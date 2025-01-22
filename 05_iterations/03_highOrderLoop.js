// for of loop

// => this loops are array specific 


// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World of JavaScript"

for (const greet of greeting) {
    if(greet == " "){
        continue
    }
    // console.log(greet);
}


// 1. Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-' ,value);
}



// On Object

const myObject = {
    'game1': 'Uncharted',
    'game2': 'CoC'
}

for (const [key, value] of myObject) {
    console.log(key, value);
    
}