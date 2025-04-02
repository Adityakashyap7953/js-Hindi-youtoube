// // premitive 
// // 7 Types :String,Number,Boolean,Null,Undefined,BigInt,Symbol
//    const score=100
//    const scorevalue=100.4
//    console.log(score)
//    console.log(typeof(scorevalue));
//    // both score and scorevalue variables are Number type datatype
//    const isloggedin=false
//    console.log(isloggedin);
//    //false
//    const outsidetemp=null
//    console.log(outsidetemp)
//    //null 
//    let userEmail;
//    console.log(userEmail);
//    //undefined

//    const id =Symbol('123')
// console.log(id);
// const anotherid=Symbol('123')
// console.log(anotherid);

// console.log(id ===anotherid);

// const bignumber=345678992n
// console.log(typeof bignumber)
// // Refrence Type (non Primitive)
// // Array,Objects,Function 
// const heros=["shakatiman","nagara","doga"];
// console.log(typeof heros);
// //object
// console.log(heros[1]);
// nagara

// let myobj={
//     name:"aditya",
//     age:22,
// }
// console.log(typeof myobj)
// // object
// console.log(myobj.name)
// // aditya
// const myFunction=function(){
//     console.log("hello word")
// }
// console.log(typeof myFunction )
// //function
// myFunction()
// // output: hello word


// *************************Stack(premitive) , Heap(Nonpremitive) ******************////
// let myYoutubename="adityakashyap.com"
// let anothername=myYoutubename
// console.log(anothername);
// // adityakashyap.com
// console.log(myYoutubename);
// // adityakashyap.com
// anothername="kashyap@.com"
// console.log(anothername);
// kashyap@.com
// In stack it gives a copy of a variable for the use so which change in the that not affect the original value only change in copy 


// But in heap(non primitive type ) it gives a refrence of original value so that which chnage in another variable that asign the orginal value in it also change in original when change in another 
// let myobj={
//     gmail:"aditya@.com",
//     upi:"aditya@ybl"
// }
// let anotherobj=myobj;
// console.log(anotherobj.gmail);
// // aditya@.com
// anotherobj.gmail="kashyap@.com"
// console.log(anotherobj.gmail);
// // kashyap@.com
// console.log(myobj.gmail);
// // kashyap@.com
// //  When in chnage in other then it also chnage in original 
 function myFunction(){
    return{
        name:"aditya",
    lastname:"kashyap"
    };
 }
console.log(myFunction().name);

 