let score = 33

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)      //  <-- conversion in number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN 
// true => 1; false => 0
// null => 0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)   // <-- conversion in boolean 
// console.log(booleanIsLoggedIn);

// 1 => true
// "" => false 
// "omkar" => false


let strNumber = 33

let stringNumber = String(strNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ****** Operation ******

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(2 % 3);


let str1 = "hello"
let str2 = " omkar"
let str3 = str1 + str2 
// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4 ) * 5 % 3);    // --> perfer not to use diffcult (readability)


// console.log(+true);   // 1
// console.log(+"");     // 0


let num1, num2, num3 

num1 = num2 = num3 = 2 + 2


let gameCounter = 100
gameCounter++;
// console.log(gameCounter);       // 101

// *** PostFix ***  [return the value before incrementing]
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// output: "x:4, y:3"


// *** PreFix *** [return the value after incrementing]
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
//  output: "a:4, b:4"

