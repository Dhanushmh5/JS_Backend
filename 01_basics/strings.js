const name="Dhanush"
const repoCnt=15
let collegename="RVCE"
let branchname="CSE-DataScience"
//outdated method
//console.log(name+repoCnt)
//use backtics helpful for variable injection and string interpolation

console.log(`Hi my name is ${name} and i am studying in ${collegename} college of engineering in the branch ${branchname} and i belong to ${2026} batch`)
const gameName = new String('Dhanush_M_H')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('H'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(2, 7)
console.log(anotherString);

const newStringOne = "   Dhanush_M_H   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dhanushmh5//JS-Backend//01_basics"

console.log(url.replace('01', '-'))

console.log(url.includes('JS'))

console.log(gameName.split('_'));