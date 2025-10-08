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