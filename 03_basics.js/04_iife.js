// Global scope ke variable declaration se pollution hoti h kai baar, to uss global scope k pollution ko htane iife ka declaration kiya

//named IIFE ->

(function chai(){
    console.log("Amrit Raj")
})() ;                           //ise pta nhi hota ki end kb krna h uske liye hm ; lgate h taaki agla code aaram se run ho paaye


//unnamed IIFE ->

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Amrit');