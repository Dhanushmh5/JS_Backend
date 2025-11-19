

const promise1 = new Promise(function(resolve,reject){
    //async task
    //DB reqs,cryptography,fileOperations
    setTimeout(function(){
        console.log('Async task solved')
        resolve()
    },1000)
    //connecting resolve and .then

    
}) //creting of promises

//consumption of promises

promise1.then(function(){
    console.log("Promise Consumed")
})

///another way to use promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('AsyncTask 2')
        resolve()
    },1000)
}).then(function(){
    console.log('Promise2 consumed')
})

// doing some aync task and passing arguments to promises and getting vales in .then()

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:'abc',email:'abc@example.com'})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Promise is eithe resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//resolvig promises using async and await 

async function consumePromise5() {
    //wrapping in try and catch block for smooth error handling
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise5()

//Api data resolving using promises

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data =await response.json() //this also takes time so we need to use await

//         console.log(data)
//     } catch (error) {
//         console.log('Error:',error)
//     }

// }
// getAllUsers()

//Fetch in Javascript


fetch('https://jsonplaceholder.typicode.com/users')
.then((user)=>{
    const data= user.json()
    return data
})
.then((user)=>{
    console.log(user)
})
.catch((error)=>{
    console.log("Error :",error)
})