function fun(){
    console.log(2)
    console.log(3)
    console.log(4);
    console.log("I");
  console.log("H");
    
    
}
// console.log(fun());
// 2
// 3
// 4
// I
// H
// undefined


// function addtonumber(num1,num2){
//     return num1+num2
//     // console.log("after return sttsment not any thing work ");
    
// }
// console.log(addtonumber(1,2))
function loginusermessage(username){
    if(username===undefined)
    {
        console.log("Please enter a username ");
        return
    }
    return`${username} just loged in `
}
// console.log(loginusermessage("aditya"));

// function calculatecartprice(num1)
// {
//     return num1
// }
// console.log(calculatecartprice(200));
// 200
// console.log(calculatecartprice(200,300,400));
// 200
// but when use rest operator(...num1) then it retuurns all values in arrays form 
// function calculatecartprice(...num1)
// {
//     return num1
// }
// console.log(calculatecartprice(200,300,400));
// [ 200, 300, 400 ]
// function calculatecartprice(val1,val2,...num1)
// {
//     return num1
// }
// console.log(calculatecartprice(200,300,400,500));
// 200,300 goes into val1,val2 and rest are output 
// const user={
//     username:"Aditya",
//     price:129
// }
function objecthandle(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// objecthandle(anyobject);
objecthandle({
    username:"Aditya",
    price : 200
})
// username is Aditya and price is 200

// const myarray=[200,400,100,600]
// function returnsecondvalue(getArray){
//     return getArray[1]
// }
// console.log(returnsecondvalue(myarray));
// // 400