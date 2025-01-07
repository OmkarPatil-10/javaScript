const marvel_heros = ["ironMan", "spiderMan", "thor"]
const dc_heros = ["superMan", "batMan", "flash"]

// push()
// marvel_heros.push(dc_heros)     // ->> combine the two array into one but it consider second array as single element & change is made in the existing array

// console.log(marvel_heros);  // [ 'ironMan', 'spiderMan', 'thor', [ 'superMan', 'batMan', 'flash' ] ]


// concat() =>> combine
// const allHeros = marvel_heros.concat(dc_heros)  // ->> combine two or more array & returns new array without modifying the existing array 
// console.log(allHeros);  // [ 'ironMan', 'spiderMan', 'thor', 'superMan', 'batMan', 'flash' ]


// spread() =>> break & combine 
const all_heros = [...marvel_heros,...dc_heros]     // ->> make the each array elemnt into indiviual elemnt then combine it
console.log(all_heros);     // [ 'ironMan', 'spiderMan', 'thor', 'superMan', 'batMan', 'flash' ]


// flat() =>> simplified the array
const arry1 = [1, 2, 3 , [1, 2, 3], 4 , [1, 2, [1, 2]]]
const arry2 = arry1.flat(Infinity)     // depth search (1, 2, ....., infinity) Lvl
console.log(arry2);     // [ 1, 2, 3, 1, 2, 3, 4, 1, 2, 1, 2 ]


console.log(Array.isArray("omkar"));   // false ->> array or not
console.log(Array.from("omkar"));   // [ 'o', 'm', 'k', 'a', 'r' ] ->> converts the input data into array form 
console.log(Array.from({name:"omkar"}));    // [ ]  ->> bcz we have to mention the parameters to convert [key or value]



let arr1 = 100
let arr2 = 200
let arr3 = 300

console.log(Array.of(arr1, arr2, arr3));    // [ 100, 200, 300 ] ->> combines mutliple data(elemnt) & returns new single array
