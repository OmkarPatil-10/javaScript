// forEach Loop

const coding = ["js", "ruby", "java", "python", "Cpp" ]

// 1. for direct function
// coding.forEach( function (arrayItem){
//     console.log(arrayItem);
// } )


// 2. Arrow Function 
coding.forEach( (val) => {
    // console.log(val);
    
})

// 3. making function seprately then injecting in forEach loop
function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)



// NOTE: "forEach loop" has access of array index, array items & array itself
// coding.forEach( (items, index, arr) => {
//     console.log(items, index, arr);
// } )



// for array in object
const myCoding = [
    {
        languageName: "JavaScript",
        fileName: "js"
    },
    {
        languageName: "Python",
        fileName: "py"
    },
    {
        languageName: "Ruby",
        fileName: "rb"
    },
]

myCoding.forEach( (items) => {
    console.log(items.languageName);  // ->> acessing object value
} )