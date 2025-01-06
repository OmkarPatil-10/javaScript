// Dates

let myDate = new Date()
// console.log(myDate);        // 2025-01-06T11:11:50.698Z
// console.log(myDate.toString());     // Mon Jan 06 2025 11:11:50 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());     // Mon Jan 06 2025
// console.log(myDate.toLocaleString());     // 1/6/2025, 11:13:51 AM
// console.log(myDate.toLocaleDateString());     // 1/6/2025
// console.log(myDate.toJSON());     // 2025-01-06T11:15:17.537Z

// console.log(typeof myDate);      // object


// let myNewDate = new Date(2025, 0, 14)
// console.log(myNewDate.toDateString());      // Tue Jan 14 2025

// let myNewDate = new Date(2025, 0, 14, 6, 4)
// console.log(myNewDate.toLocaleString());        // 1/14/2025, 6:04:00 AM

let myNewDate = new Date("01-14-2025")
// console.log(myNewDate.toLocaleString());        // 1/14/2025, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp);       // 1736163144374     <-- in mili-sec from January 1, 1970
// console.log(myNewDate.getTime());

// console.log(Math.floor(Date.now() / 1000 ));        // 1736163472   <-- converting mili to sec


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  // 0(jan)   => +1 -> 1
console.log(newDate.getDay());


console.log(newDate.toLocaleString('ist',{      // ist --> india standard time 
    timeZone: 'ist'
}));
