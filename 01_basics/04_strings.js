let name = "amrit"
let val = 50
let surname = " raj"

// console.log(name + val + surname);

//But better way to represent it
// console.log(`Hi my name is ${name} and surname is ${surname} and repocount is ${val}`)

const str1 = new String("amrit--Raj")

// console.log(str1.length)
// console.log(str1.charAt(3))
// console.log(str1.indexOf('t'))
// console.log(str1.toUpperCase())

const str2 = new String("oyeeeeamritttt")

//Slice 
// console.log(str2.substring(1,5)); 
const str3 = str2.slice(-5);
// console.log(str3); 

const str4 = new String("     AMRIT %20 RAJ    ")
// console.log(str4.trim());   // will remove the beginning and ending whitespaces

// console.log(str4.replace('%20',"--"));
// console.log(str4.includes("shivam"))

const str5 = new String("amrit-prasun-mayank")

console.log(str5.split('-'))