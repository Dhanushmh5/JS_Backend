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

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//Part2

//singleton using constructor
const user=new Object();
user.id="abc123"
user.name="Sam"
user.isLoggedIn=false;
console.log(user)


const anotherUser={
    email:"some@gamil.com",
    fullname:{
       userFullName:{
        first:"Ajay",
        middle:"A",
        last:"B"
       }
    }
}
anotherUser.fullname.userFullName.last="Chavan"
console.log(anotherUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]