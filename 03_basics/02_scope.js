// Scope hume tab kahte jb koi bhi code ko {} braces ke inside me likhte h, but jo object me likhte h wo to object hi hota h ~~~
// hm var isiliye use nhi krte kyunki jb scope k andar uska value change krenge toh apne aap change ho jata, lekin aisa let and const k saath nhi hota


//var c = 300
let a = 300
if (true) {   //scope ke andar likha cheez bahar wale ko affect nhi krega
    let a = 10
    const b = 20
    // console.log("INNER: ", a);   // ab jaake ye iska value print krega jo ki inner scope me declare hoga 
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))     // will simply give the ans 

function addone(num){
    return num + 1
}



console.log(addTwo(5))      //it will throw error because we have chosen the expression way to declare the function ~~~

const addTwo = function(num){           // expression way
    return num + 2
}