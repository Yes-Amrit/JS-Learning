//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Amrit",
    age: 20,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//***********************************************************STACK AND HEAPS***************************************************************** 

// STACK ME CHEEZE COPY HOKAR JATI H, ORIGINAL SAFE RHTA H, TOH CHAHE KITNA BHI VALUE CHANGE KRE WO USKE ORIGINAL PR FARQ NHI PDEGA, BUT HEAP IS JUST OPPOSITE

let userName1 = "shyam";
let userName2 = userName1
userName2 = "Raam"  // username1 will be safe but userName2 will be change accordingly
// console.log(userName1)
// console.log(userName2)

//Now let's talk about HEAP

let user1 = {
    name:"shyam",
    emailId : "mail@gmail.com"
}
let user2 = user1;
user2.name = "Amrit"     // the original will be changed 

console.log(user1.name)
console.log(user2.name)