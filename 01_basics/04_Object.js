const tinderuser=new Object() //singelton object 
// console.log(tinderuser);
// {}
// const tinderuser={} //this is on singleton user 
tinderuser.id="123abc"
// tinderuser.name="Sammy"
// tinderuser.isloggedin="false"
// // console.log(tinderuser);
// // { id: '123abc', name: 'Sammy', isloggedin: 'false' }
// const regularuser={
//     email:"some@regular",
//     fullname:{
//         userfullname:{
//             firstname:"Aditya",
//             lastname:"kashyap"
//         }
//     }
// }
// // console.log(regularuser.fullname.userfullname);
// // { firstname: 'Aditya', lastname: 'kashyap' }

// // value marge karna 
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// console.log(obj3)
// // console.log(obj1[2]);
// // b
// // we can also used object assign method in object assign method empty {} is a target element in which all source (obj1,obj2,obj3) are stored 
// // const obj4=Object.assign({},obj1,obj2,obj3)
// // console.log(obj4);
// // {
// //     '1': 'a',
// //     '2': 'b',
// //     '3': 'c',
// //     '4': 'd',
// //     obj1: { '1': 'a', '2': 'b' },
// //     obj2: { '3': 'c', '4': 'd' }
// //   }
// // ithout target element  in ibj1 all source are copied and overright
// // const obj4 =Object.assign(obj1,obj2,obj3)
// // console.log(obj1)
// // <ref *1> {
// //   '1': 'a',
// //   '2': 'b',
// //   '3': 'c',
// //   '4': 'd',
// //   obj1: [Circular *1],
// //   obj2: { '3': 'c', '4': 'd' }
// // }
// // console.log(obj4);
// // <ref *1> {
// //   '1': 'a',
// //   '2': 'b',
// //   '3': 'c',
// //   '4': 'd',
// //   obj1: [Circular *1],
// //   obj2: { '3': 'c', '4': 'd' }
// // }
// // spread method 
// // const obj5={...obj1,...obj2}
// // console.log(obj5);


// // Object.key(),Object.values() gives output an array form 
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// // [ 'id', 'name', 'isloggedin' ]

// console.log(Object.values(tinderuser));
// // [ '123abc', 'Sammy', 'false' ]
// console.log(Object.entries(tinderuser));
// // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isloggedin', 'false' ] ] array ke andr array me change kr deta hai keys or values ko ek sh rkhkr 
// console.log(tinderuser.hasOwnProperty('name'));
// // true only used property (keys not use values with the hasownProperty ())


/* for practicing */
// const Aditya={}
// Aditya.id=101;
// Aditya.dsg="student";
// // console.log(Aditya);
// Aditya.fullname={
// Firstname:"Aditya",
// Lastname:"kashyap"
// }
// Aditya.adrress={
//     firstlineadd:{
//         streatno:2,
//         flatno:40
//     },
//     second:{
//         vilage:"chalera",
//         city:"Noida"
//     }
// }

// console.log(Aditya.adrress.firstlineadd.flatno)
//     // methods of object 
//     // for combinig two object 
// var obj1={1:"a",2:"b"}
// var obj2={3:"a",4:"b"}
// // var obj3={obj1,obj2}
// // var obj3=Object.assign({},obj1,obj2)
// var obj3={...obj1, ...obj2}
// console.log(obj3);

var obj1={
    id:101,
    name:"Aditya",
    dsg:"student",
    salary:50000
}
var obj2={
    id:102,
    name:"Aman",
    dsg:"trainer",
    salary:10000
}
// var obj3={...obj1, ...obj2}
var obj3=Object.assign({},obj1,obj2)
console.log(obj3);







