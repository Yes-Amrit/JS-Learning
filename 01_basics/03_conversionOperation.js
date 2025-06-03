"use strict"

let a = "234";
// console.log(typeof(a))

let b = Number(a)     // this will convert any data type to number 
// console.log(typeof(b)) 

let c = "234abcd";
// console.log(typeof(a))

let d = Number(c)     // but here is problem that abcd is not a number then what this will convert that means we have to check whether it is valid or not so for that we would check it with consol.log(), because typeof would return number but we all know that it is not number  
// console.log(typeof(d)) 
// console.log(d) // NaN means not a number

// "33" -> 33
// "33abc" -> NaN
// true -> 1 
// 1-> true
// "" -> false
// "Amrit" -> true


let loggedIn = 1
let boolLoggedIn = Boolean(loggedIn)

// console.log(typeof(boolLoggedIn))
// console.log(boolLoggedIn)



//***************************************************Operations********************************************************************


// console.log(2*3)
// console.log(2**3)
// console.log(2+3)
// console.log(2-3)
// console.log(2%3)
// console.log(2/3)

// let str1 = "Hello,"
// let str2 = " Amrit"
// console.log(str1+str2)

// console.log(1 + "2")    //12
// console.log("1" + 2)  //12
// console.log("1" + 2 + 3)   //123
// console.log(1 + 2 + "3")  //33
// console.log(1 + "2" + 3)  //123


// console.log(true)
// console.log(+true)

//Avoid these type of conversion

// console.log(null > 0)
// console.log(null >= 0)

// console.log(undefined <= 0)
// console.log(undefined > 0)