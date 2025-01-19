// Imdediately Invoked Function Expresion (IIFE)

//Syntax
// ()();  => 1. () --> in this actual function is present
//           2. () --> used for exceution of function "Execution call"
//           3. ; --> used terminate 

(function connection(){
    //Named IIFE
    console.log("DB CONNCETED");
})();



( (username)=> {
    //Simple (unNamed) IIFE
    console.log(`DB CONNCETED AGAIN for ${username}`);
})("Omkar");