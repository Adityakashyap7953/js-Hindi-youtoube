// const coding =["js","ruby", "java" , "python" , "cpp"]
//    console.log(coding[3]);
// const values =coding.forEach((item) =>{
//     // console.log((item));
//     console.log(coding[2]); // for each loop ke andr array se jo bhi value call kroge wo arry ki length ke brabr value again and again value print krega 
//     // return item;
// })
// // console.log(values[3]);
// // for each loop does not return any values this is undefined


const mynums=[1,2,3,4,5,6,7,8,9,10]
// syntax of filter method = filter( (callbackvalue) =>condition)
//  syntax=filter((callback) =>{return contdition})
const scope=mynums.filter((num)=>{
    return num==9;
})
console.log(scope);
//  for this cuurly braces synatx usses return type and outside cuurrly braces print value 

// const newnums=mynums.filter( (num) => num>4)
// const smaller=mynums.filter((num) => num<4 )
// console.log(smaller);
// console.log(newnums);

// const newnums=[]
// mynums.forEach((num)=>{
//     if(num==10)
//     {
//         console.log(num);    
//     }
// })
// console.log();


