//Browser ke andar jo global object h wo window object h

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);              //ye this node environment ko represent kr rha h jo ki ik empty object h

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);         // as a function k andar aake this use nhi kr skte hm
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


//ARROW FUNCTION -:
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                        //Yahan hume return likhne ka jarurat hain
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )          //Yahan hume return likhne ka jarurat nhi

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()