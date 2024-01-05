//primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(outsideTemp)
console.log(userEmail)

//console.log(id === anotherId);

//const bigNumber = 4256433435435435n

//Reference (Non primitive)
//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]

let myobj = {
    name : "supreme",
    age : 20,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId);
