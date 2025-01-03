const name ="omkar"
const age = 19

// console.log(name + age );

console.log(`My Name is ${name} and my age is ${age}`);     // modern way 

const gameName = new String('om-patil-in')

// console.log(gameName [4]);      // at given index shows which character is present at the given index
// console.log(gameName.__proto__);


// console.log(gameName.length);       // gives length of total string 

// console.log(gameName.toUpperCase());        // UpperCase
// console.log(gameName.toLowerCase());        // LowerCase

// console.log(gameName.charAt(3));     //to access a character at the specified index
// console.log(gameName.indexOf('p'));  //gives index of specified character

const newString = gameName.substring(3,8);    //dividing the string into smaller according to specified range start[3] t0 end [8] <-- here is 8th character is not consider 
// console.log(newString);

const anotherString = gameName.slice(-8, 3);    // same as substring() but not use widely now
// console.log(anotherString);

const newStringOne = "   Omkar   "
// console.log(newStringOne);
// console.log(newStringOne.trim());    // trim the whitespaces from string 

const url ="https://github.com/omkar%20patil"
console.log(url.replace('%20', '-'));    // repalce the specified substring into new specified string

console.log(url.includes('omkar'));     // finding the specified substring in the assigned string

console.log(gameName.split('-'));    // split the string using specified separator(-)