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

//Scopes Part 2

function one(){
    const username="Dhanush"

    function two(){
        const website="youtube.com"
        console.log(username)
    }
    //console.log(website) //not accessible due to block scope

    //two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

console.log(addone(5))
function addone(num){// function
    return num + 1
}



//addTwo(5)// cannot be accesed before initialization
const addTwo = function(num){//expression
    return num + 2
}
console.log(addTwo(5))