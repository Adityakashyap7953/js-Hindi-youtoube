//Object literals
// Symbol define
const mysym=Symbol("Key1")


const JsUSer={
    name: "Aditya",
    [mysym]:"mykey1",
    age:23,
    location :"hardoi",
    email:"aditya7953@gmail.com",
    isLogegdIn:"false",
    Lastloginday:["Monday","Satuarday"]

}


// console.log(JsUSer.name)
// Aditya
// console.log(JsUSer["name"]);
// Aditya

// console.log(JsUSer.email);
// console.log(JsUSer["email"]);
// aditya7953@gmail.com
// aditya7953@gmail.com

// JsUSer.name="Rohan"
// console.log(JsUSer["name"]);
// Rohan 


// console.log(JsUSer);
// {
//   name: "Rohan",
//   age : 23,
//   location : "hardoi",
//   email : "aditya7953@gmail.com",
//   isLogegdIn : "false",
//   Lastloginday : [ "Monday", "Satuarday" ]
// }

// console.log(JsUSer[mysym]);
// mykey1
// console.log(typeof mysym);
// symbol
// console.log(typeof [mysym]);
// object
// console.log(typeof JsUSer[mysym]);

//  Object ko freeze karna mtlb lock krna 
// JsUSer.email="newaditya@gmail.com"
// console.log(JsUSer)
// {
//     name: 'Aditya',
//     age: 23,
//     location: 'hardoi',
//     email: 'newaditya@gmail.com',
//     isLogegdIn: 'false',
//     Lastloginday: [ 'Monday', 'Satuarday' ],
//     [Symbol(Key1)]: 'mykey1'
//   }


// Object.freeze(JsUSer)
// JsUSer.email="newestgpt@gamil.com"
// console.log(JsUSer);
// {
//     name: 'Aditya',
//     age: 23,
//     location: 'hardoi',
//     email: 'aditya7953@gmail.com',
//     isLogegdIn: 'false',
//     Lastloginday: [ 'Monday', 'Satuarday' ],
//     [Symbol(Key1)]: 'mykey1'
//   }
// JsUSer.greeting=function(){
//     console.log("Hello js user");
    
// }
// console.log(JsUSer.greeting());
// Hello js user
// undefined

