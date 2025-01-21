// For Loop 

for (let i = 0; i < 10; i++) {
    const element = i
    // console.log(element);
    
}

// 1. for with control

for (let i = 0; i < 10; i++) {
    const element = i
    if(element == 5 ){
        // console.log("5 is the best number")
    }
    // console.log(element)
}


// 2. for loop with for loop

for (let i = 1; i < 10; i++) {
    // console.log(`Table No: ${i}`)
    for (let j = 1; j < 10; j++) {
        // console.log( i + '*' + j +'='+ i*j)
    }
    
}


// 3. array for loop

const myArray = ["spiderMan", "ironMan", "hulk", "thor"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



// keyWords 

// 1. Break &  2. Continue

// 1. Break

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`)
        break;
    }
    console.log(`Value of i is ${index} `);
}


// 2. continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${index} `);
}