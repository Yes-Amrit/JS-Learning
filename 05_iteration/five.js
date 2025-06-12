const arr = ["py","cpp","java","js","ruby"]

// arr.forEach( function (items) {
//     console.log(items);
// } )

// arr.forEach((items)=>{
//     console.log(items);
    
// })

function printMe(items){
    console.log(items);
}

// arr.forEach(printMe);

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )