//Immediately invoked function expression

function one(){
    console.log("Database Connection established")

}
one(); // -> normal way to execute a function

//IIFE

(function two(){
    console.log("Database Connection Established")
})();

( ()=>{
    console.log("DB Connected!!")
} )(); //semicolon to explicitly end context of iife

//Parameterised iife

( (name)=>{
    console.log(`Hi ${name}`) //simple iife
} )("Dhanush");

//Named iife

( function chai(){
    console.log("Chai")
})(); // -> named iife
