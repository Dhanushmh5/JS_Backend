//stack-memory-Primitive
let a="abcd"
let b=a;
b="xyz"
console.log(a);

//heap memory-Non Primitive
let userOne={
    name:"abc",
    email:"abc@gmail.com"
}
let user2=userOne
user2.name="xyz"
user2.email="xyz@gmail.com"
console.log(userOne)

let heros=["hulk","ironman","thor"]
let copy=heros
copy[0]="captain America"
console.log(heros)