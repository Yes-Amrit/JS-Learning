// const obj1 = new Object(){

// }

//will be same as this one ----

const obj2 = {

}
obj2.id = "1423"
obj2.name = "suresh"
obj2.address= "Hyderabad"
obj2.email= "mail@gmail.com"

// console.log(obj2)

const fullUser = {
    name: "Amrit",
    address: "Patna",
    email:"amrit@gmail.com",
    fullName: {
        userName:{
            firstName:"amrit",
            lastName:"raj"
        }
    },
    age: 19
}

// console.log(fullUser)
// console.log(fullUser.fullName.userName)
// console.log(fullUser.fullName.userName.firstName)
// console.log(fullUser.fullName.userName.lastName)
// console.log(fullUser.fullName.userName.nahiExistKrta?.lastName)   // agr full name exist nhi krega to error throw nhi krega

const object1 = {1:"a",2:"b"}
const object2 = {3:"a",4:"b"}
const object3 = {5:"a",6:"b"}
const object4 = {7:"a",8:"b"}

const object5 = Object.assign({},object1,object2,object3,object4)  // humlog {} braces isiliye use krte h taaki dekhne pr pta chl jaye ki hum object me assign kr rhe
const object6 = Object.assign(object1,object2,object3,object4)    // agr nhi lgayenge to saar emerge hokr object1 me bhi  chla jayega
const object7 = {...object2,...object4}                          // jyadatar yhi use krenge spread operator


// console.log(object5)
// console.log(object6)
// console.log(object7)

// console.log(Object.keys(obj2))                          // [ 'id', 'name', 'address', 'email' ]
// console.log(Object.values(obj2))                       // [ '1423', 'suresh', 'Hyderabad', 'mail@gmail.com' ]
console.log(Object.entries(obj2))                      
 /* 
[
  [ 'id', '1423' ],
  [ 'name', 'suresh' ],
  [ 'address', 'Hyderabad' ],
  [ 'email', 'mail@gmail.com' ]
] */

// console.log(obj2.hasOwnProperty('name'))         // true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor    // baar baar ise likhna na pde suke liye hmlog niche wale tareeke ko use krte h

const {courseInstructor: instructor} = course   // ab apne se hm name change bhi rk skte h like  courseInstructor -> instructor

// console.log(courseInstructor);
console.log(instructor);   

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]