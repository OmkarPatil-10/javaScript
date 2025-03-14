const val= Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(val);


// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

const hero = {
    name: 'SpiderMan',
    power: 'Sense',
    isAvailable: true,

    avenger: function(){
        console.log(`Not a Avenger`);
        
    }
}

console.log(hero);
console.log(Object.getOwnPropertyDescriptor(hero, 'name'));


// changing the hero object property value
Object.defineProperty(hero, 'name', {
    writable: false,
    enumerable: false  // this stop from iterating 
})

console.log(Object.getOwnPropertyDescriptor(hero, 'name'));

// iterating
for (let [key, value] of Object.entries(hero)) {
    if(typeof value != 'function'){
        console.log(`${key}: ${value}`);
    }
}