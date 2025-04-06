// let mydate =new Date()
// console.log(mydate.toString())
// // Sat Apr 05 2025 18:22:04 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());
// // Sat Apr 05 2025
// // console.log(mydate.toLocaleString());
// // 4/5/2025, 6:24:05 PM
// console.log(mydate.toLocaleString("en-US",{ timeZone:"Asia/Kolkata",}))
// // 4/6/2025, 12:01:06 AM
// let mycretedate =new Date (2025 ,3 ,6 ,)
// console.log(mycretedate);
// // 2025-04-06T00:00:00.000Z
let mycretedatefor =new Date ("04-06-2025")
// console.log(mycretedatefor.toLocaleString())
// 4/6/2025, 12:00:00 AM
let mytimestamp=Date.now()
// console.log(mytimestamp);
// // 1743878736398 this in milisecond 
// console.log(mycretedatefor.getTime());
// // 1743897600000
// console.log(Date.now());
// 1743878939110
// console.log(Math.floor(Date.now()/1000));
// 1743879046 this is seconds
// let newdate=new Date()
// console.log(newdate);
// console.log(newdate.getDate()+1);
// // 6
// console.log(newdate.getMonth()+1);
// // 4
// console.log(newdate.getDay()+1);
// 6 means 
// console.log(newdate.toLocaleDateString("en-US",{ timeZone:"Asia/Kolkata",}));

// console.log(newdate.getDate());

const date = new Date();

const indiaTime = date.toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
});

// console.log("India Time:", indiaTime);
// console.log(indiaTime.getDate());
// TypeError: indiaTime.getDate is not a function
const Intime=new Date(indiaTime)
console.log(Intime.getDate());

console.log(date.toLocaleString('default',{weekday:"long"}))
// Saturday