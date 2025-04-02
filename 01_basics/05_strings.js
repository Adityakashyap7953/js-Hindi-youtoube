const name ="Ramayana"
const page=1001
console.log(name + page +"value");
//Ramayana1001value
// Todays this type of string concatnation is not used becuase it not seems look good 

// So today's (` `) Backticks are used for string interpollution means string concatnation through the variable inject where string value is given 



// console.log(`Hello my name is this and i like read the ${name} book and in this aprrox pages are ${page}`);
// //  output : Hello my name is this and i like read the Ramayana book and in this aprrox pages are 1001 
 

// new type of string it is called string object
const string=new String("Hello")
console.log(string[0]);
// H
console.log(string.length);
// 5
console.log(string);
// [String: 'Hello']

console.log(string.__proto__);

console.log(string.toUpperCase());
// HELLO
console.log(string.charAt(2));
// l
console.log(string.trimStart("  Hello"));
// Hello
console.log(string.indexOf('o'));
// 4
console.log(string.substring(0,3));
// Hel
console.log(string.slice(3,));
// lo
const newstring="    Aditya    "
console.log(newstring);
//  Aditya    
console.log(newstring.trim());
//Aditya  trim() function removes the whitespaces   

const url="https://aditya.com/aditya%20kashyap"
console.log(url.replace('%20',"@"));
// https://aditya.com/aditya@kashyap
console.log(url.includes("aditya"));
// true
console.log(url.split("//"));
// [ 'https:', 'aditya.com/aditya%20kashyap' ]
console.log("aditya".codePointAt(0));
// 97 returns te unicode number of character
console.log("aditya".codePointAt(1));
// 100
console.log("Aditya".codePointAt(0));
// 65 returns t0 unicode number of character
console.log("aDitya".codePointAt(1));
// 68