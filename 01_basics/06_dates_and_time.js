// Dates

let myDate= new Date();   //date is object

// console.log(myDate);  //2025-06-05T10:38:02.284Z

// console.log(myDate.toDateString());   //Thu Jun 05 2025

// console.log(myDate.toString());    //Thu Jun 05 2025 10:38:37 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleDateString());    // 6/5/2025

// console.log(myDate.toLocaleTimeString())   //10:40:02 AM

// let myCreatedDat = new Date(2023, 4, 14)
let myCreatedDat = new Date("4-8-2025")
// console.log(myCreatedDat.toDateString())   //Sun May 14 2023

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDat.getTime())
// console.log(Math.floor(myTimeStamp/1000))

console.log(myDate.getDay())
console.log(myDate.getMonth() + 1)
console.log(`Today's date is ${myDate.toDateString()} and time is ${myTimeStamp}` )

myDate.toLocaleString('default', {
    weekday: "narrow"
})
console.log(myDate)