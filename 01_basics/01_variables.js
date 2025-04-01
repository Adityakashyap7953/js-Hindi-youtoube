const accId=144553;
let accEmail ="adityakashyap7953@gmail.com";
var accPassword="12345";
accCity="Jaipur";
// accId=2; // not allowed 
accEmail="hc@hc.com";
accPassword=2345;
/* Prefer not to use var because of issue in block scope and function scope  */
accCity='kanpur';
console.log(accId);
console.log(accEmail);
console.log(accPassword);
console.log(accCity);
//  another methor for printing the out at a time 
console.table([accId,accEmail,accPassword,accCity]);