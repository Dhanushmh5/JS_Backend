//objects
//two ways to create an object -- literals and constructor
//when constructor method is used to create the object a singleton is formed



//object literals
const mySymbol=Symbol("abc"); //symbol declaration
const JsUser={
    name:"Dhanush",
    class:"Data-Science",
    "fullname":"DhanushMH",
    [mySymbol]:"xyz",//using of symbol as a key
    roll:16,
    email:"dhanush@google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser.fullname);
// console.log(JsUser["roll"]);
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser[mySymbol]);

//changing values

JsUser.email="xyz@abc.com"
//Object.freeze(JsUser);
JsUser.roll=21;
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());