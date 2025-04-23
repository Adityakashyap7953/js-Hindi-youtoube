// let a=100
// var b=200
// const c=300
if(true){
    let a=100
var b=200
const c=300
console.log(a)
console.log(b);
console.log(c);
}
// console.log(a);  block level 
console.log(b); 
// global level scope var is global level scope variable 
// console.log(c); bloack level scope 
// In JavaScript, scope refers to the context in which variables are accessible or visible. There are several types of scope:

// 1. Global Scope Variables declared outside any function or block.
// Accessible from anywhere in the code.


let globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Accessible here
}
console.log(showGlobal())

// 2. Function Scope Variables declared inside a function are only accessible within that function.

function greet() {
  let name = "Alice";
  console.log(name); // Accessible here
}
console.log(greet())
// console.log(name); // Error: name is not defined

// 3. Block Scope Introduced with let and const in ES6. Variables are only accessible within the block {} they are defined in.
// if (true) {
//   let blockVar = "Inside block";
//   console.log(blockVar); // Works
// }
// console.log(blockVar); // Error: blockVar is not defined


// 4. Lexical Scope functions have access to variables defined in their outer scope.


function outer() {
  let outerVar = "outer";

  function inner() {
    console.log(outerVar); // Accessible due to lexical scope
  }

  inner();
}
console.log(outer());


