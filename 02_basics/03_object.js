//objects 2 tarah se declare hota h -: object literals, constructor
// constructor method se jb bnate h to singleton bnta h unlike object literals

const sym = Symbol("key1")

const jsUser = {
    name: "Amrit",
    [sym]:"mySymbol",     //symbol ko aise declare krte h 
    age:19,
    "location":"Delhi",
    isLoggedIn : false,
    lastLongDays: ['Monday','Sunday']
}

// console.log(jsUser["age"])
// console.log(jsUser.age)
// console.log(jsUser[sym])   

// console.log(jsUser.location)  //will throw error
// console.log(jsUser["location"])  // so we prefer this way to get entry from object

// values ko change kaise krte h
jsUser.name = "Shivoham"
//agr chhate h ki value change na kr ske toh uske liye use freeze

// Object.freeze(jsUser)

jsUser.name = "huehuehue"   // ab change nahi hoga ye
// console.log(jsUser)

//Function add krt eh Object me

jsUser.greeting = function(){
    console.log("Hello user, im function")
}

console.log(jsUser.greeting())  //[Function (anonymous)]

jsUser.greeting2 = function(){
    console.log(`Hello ${this.name}, im function`)
}

/* Hello user, im function
undefined
Hello huehuehue, im function
undefined */

console.log(jsUser.greeting2())