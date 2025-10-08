// let a=1
// const b=2
// var c=3
// console.log(a)
// console.log(b)
// console.log(c)


//Global Scope

let d=4
const e=6
let a=250 ///Gobal Scope
if(true){
    //scope definitions
    let a=1 // let->like local variable cannot be used outside scope
    const b=2// const->localized scope similar to let
    var c=3// acts like a global variable can be accesed outside the scope very big issue-no predefined scope for var
    console.log("Inner Scope Value",a)//same name but scope difference
}
console.log(a)
// console.log(b)
// console.log(c)
