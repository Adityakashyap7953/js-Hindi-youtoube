const tinderuser=new Object()
// console.log(tinderuser);
// {}
tinderuser.id="123abc"
tinderuser.name="Sammy"
tinderuser.isloggedin="false"
// console.log(tinderuser);
// { id: '123abc', name: 'Sammy', isloggedin: 'false' }
const regularuser={
    email:"some@regular",
    fullname:{
        userfullname:{
            firstname:"Aditya",
            lastname:"kashyap"
        }
    }
}
// console.log(regularuser.fullname.userfullname);
// { firstname: 'Aditya', lastname: 'kashyap' }

// value marge karna 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
// console.log(obj3)
// console.log(obj1[2]);
// b
// we can also used object assign method 
const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);

