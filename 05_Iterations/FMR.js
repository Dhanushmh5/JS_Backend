// const coding=["JS","TypeScript","Java","Python"]

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(values) // for each doesnt give return type for items

const nums=[1,2,3,4,5,6,7,8,9,10]
const value=nums.filter((num)=>{
    return num>5;
})
// console.log(value) // filter return the values

//to do the same process using for each loop

const arr=[]

nums.forEach((num)=>{
    if(num>5){
        arr.push(num)
    }
})

// console.log(arr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const val=books.filter((obj)=> (obj.publish>1990 && obj.genre==="Non-Fiction"))
// console.log(val);


//Map
// const newArr=nums.map((num)=>num+10)
// console.log(newArr);

const newNums = nums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40) //chaining of maps and filter

// console.log(newNums);

//Reduce method
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);