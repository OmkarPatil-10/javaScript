const score = 400
// console.log(score);     //400

const balance = new Number(100.4585)
// console.log(balance);       // [Number: 100.4585]

// console.log(balance.toString().length);     // 8
// console.log(balance.toFixed(2));        // 100.46

const anotherNo = 783.8374

// console.log(anotherNo.toPrecision(3));  // 784 -> gives the precison on specified digit location  {return as string}

const salary = 10000000
// console.log(salary.toLocaleString('en-IN')); // 1,00,00,000  -> make Number easy to understand



// +++++++++++      Maths    ++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));          // 4
// console.log(Math.round(4.6));       // 5
// console.log(Math.ceil(4.1));        // 5
// console.log(Math.floor(4.9));       // 4
// console.log(Math.min(3, 6, 1, 9));       // 1
// console.log(Math.max(3, 6, 1, 9));       // 9


console.log(Math.random());         // gives random value
console.log((Math.random()*6) + 1);    // 6 -> gives range & 1 -> min value
console.log(Math.floor(Math.random()*6) + 1);

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min );


