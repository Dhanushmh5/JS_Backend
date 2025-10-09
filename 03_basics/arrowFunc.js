///This and Arrow function

const user={
    username:"Dhanush",
    price:990,
    welcomeMsg:function(){
        console.log(`Welcome ${this.username}`)//to refer to current context
        console.log(this)
    }
}

// user.welcomeMsg()
// user.username="Sam"
// user.welcomeMsg()//if we dont use this keyword then changes wont be carried forward
// console.log(this)//empty object ->no context in node environment


//this in functions

function one(){
    let username="dhanush"
    console.log(this.username) // return undefined
}
one()

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()