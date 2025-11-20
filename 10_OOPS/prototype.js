// let myName = "dhanush     "
// let mychannel = "abc     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dhanush = function(){
    console.log(`dhanush is present in all objects`);
}

Array.prototype.heyDhanush = function(){
    console.log(`Dhanush says hello`);
}

// heroPower.dhanush()
myHeros.dhanush()
myHeros.heyDhanush()
// heroPower.heyDhanush() //here in this case the object doesnt have access to property injected for array

// inheritance
//traditional codebase
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //keyword for prototypal inheritance
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //inheritance

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()