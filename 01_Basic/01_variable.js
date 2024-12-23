const accountId = 9876    //   <-- not changeable once it assign
let accountEmail = "omkar@gmail.com" // declaring the variable (mostly used)
var accountPassword = "1234"  // aslo declaring the variable (not used widely)
accountCity = "Mumbai"  // we also declare variable without any keyword 
let accountState;  // we reversed for future & the value of this varaible undefined

// accountId = 2

accountEmail = "patil@gamil.com"
accountPassword = "4321"
accountCity = "Navi-Mumbai"

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var 
Bcz of issue in block scope and functional Scope
*/