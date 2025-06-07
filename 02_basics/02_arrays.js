const marvel_heroes = ["IronMan","Thor", "Black Panther", "Hulk", "Captain America"]
const dc_heroes = ["Wonder Woman","AquaMan", "Flash", "BatMan", "SuperMan"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[5][2])

const allHeroes = marvel_heroes.concat(dc_heroes)                 //[ 'IronMan', 'Thor', 'Black Panther', 'Hulk', 'Captain America' ]  // limited to 2 only
// console.log(allHeroes)

const newHeroes = [...marvel_heroes, ...dc_heroes]  // not limited to 2 can be used for many and give output similar to concat and push

// console.log(newHeroes)

const new_array = [1,3,12,[2,6,33,[14,2,66,[33,74,5],68],81,21,43],5,10,153]

const real_another_array = new_array.flat(Infinity)      /*
[
   1,  3, 12,  2,   6, 33, 14,
   2, 66, 33, 74,   5, 68, 81,
  21, 43,  5, 10, 153
]
*/
// console.log(real_another_array)

// console.log(Array.isArray("Amrit Raj"));   //True or False
// console.log(Array.from("Amrit Raj"));
/*

[
    'A', 'm', 'r',
    'i', 't', ' ',
    'R', 'a', 'j'
    ]

    */ 

//    console.log(Array.from({name :"Amrit Raj"}));  //[]  Interesting

let a1 = 200
let a2 = 400
let a3 = 500
console.log(Array.of(a1,a2,a3))  //[ 200, 400, 500 ]