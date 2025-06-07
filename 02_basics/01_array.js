const arr1 = [1, 2, 3, 4, 5]


const arr2 = new Array(32, 45, 6, 12, 4)

const superHeroes = ["shaktiman", "Batman", "Superman", "Papa", "Iron-Man"]

console.log(superHeroes)
console.log(superHeroes[3])

arr1.push(34)
arr1.push(99)
arr1.push('D')

arr1.unshift(33)    //start me add ho jayega
arr1.shift()    //shift ho jaygea right me

arr1.pop()  //D will be removed 

console.log(arr1)    
console.log(arr1.includes(12))  //return true or false    
console.log(arr1.indexOf(2))  //return index of 2  

const newArr = arr2.join()        // will bind and change into string type
console.log(typeof(newArr))      // string 
console.log(newArr)      //32,45,6,12,4



//Slice and Splice 

const arr3 = [0, 1, 2, 3, 4, 5, 6, 7]

console.log("A ", arr3.slice(1,3))

console.log("B ", arr3)

console.log("C ", arr3.splice(1,3))  //original array se ye element 1 to 3 including uda deta h unlike slice

console.log("D ", arr3)
