// const score=400
// console.log(score);
// // 400
// console.log(typeof score);
// // number
// const balance=new Number(100)
// console.log(balance);
// // [Number: 100] this gives new number type object 

// console.log(balance.toString);
// // [Function: toString]
// console.log(balance.toString());
// // 100
// console.log(balance.toString().length);
// // 3
// console.log(balance.toFixed(2));
// // 100.00 
// const othernum=23.879;
// console.log(othernum.toPrecision(3));
// // 23.9
// const anothernum=123.8966
// console.log(anothernum.toPrecision(3));
// // 124
// console.log(anothernum.toPrecision(4));
// // 123.9
// let expo=1123.8966
// console.log(expo.toPrecision(4));
// // 1124
// console.log(expo.toPrecision(3));
// // 1.12e+3

// const hundreds=1000000
// console.log(hundreds.toLocaleString());
// // 1,000,000 in us local 
// console.log(hundreds.toLocaleString('en-IN'));
// 10,00,000 this gives the output in indian numbersystem


// ********************MATHS******************************
 
// console.log(Math)
// // Object [Math] {}
// console.log(Math.abs(-4));
// // 4 this abs function only convert negative value in positive value
// console.log(Math.round(4.3));
// //  4
// console.log(Math.round(4.6));
// // 5
// console.log(Math.ceil(4.2));
// // 5
// console.log(Math.floor(4.7))
// // 4 
// console.log(Math.min(4,2,0,7,8));
// // 0
// console.log(Math.max(4,2,0,7,8));
// // 8
console.log(Math.random());
// 0.2606703772753802
console.log(Math.random());
// 0.5985876843069529
console.log(Math.floor(Math.random()*10) +1);
// 5
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min +1))+min);
// output is between 10-20 number 