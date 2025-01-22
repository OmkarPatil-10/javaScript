// forin loop

const myObject = {
    js: 'javaScript',
    cpp: 'cpp',
    rb: 'ruby',
    jsx: 'react'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}



// for array 

const programming = ["js", "rb", "py", "cpp", "jsx"]

for (const key in programming) {
    // console.log(programming[key]);
    
}



//for map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }