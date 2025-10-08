function add2No(a,b){
    return a+b
    
}
console.log(add2No())//if no argument passed then output is NaN
console.log(add2No(4,4))

const res= add2No(3,2); //if only console.log is used in func then it wont get stored in the res variable
console.log("Result :",res)

function loggedIn(username = "Sam"){//default value sam

    //ifcheck
    if(username==undefined){ // !username means the same
        console.log("Please pass the argument");
        return
    }
    return `${username} logging in successfull`
}

const status=loggedIn("Ajax")
console.log(status)

const status1=loggedIn() // returns an undefines if value is not passed to avoid use an if check
console.log(status1)

///////////////PART2

function calculateCartPrice(a){
    return a
}
console.log(calculateCartPrice(200,300,400)) //only first value gets printed since only expects one parameter

function calculateCartPrice(a,b,...num1){//rest operator
    return num1
}
console.log(calculateCartPrice(200,300,400,300,500,600)) //200-a 300-b [400,300,500,600]->num1


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));