const heroes=["Ironman","shktikapur","bhuland"]
const marvel_hero=["Nokke","Jokekr","Harder"]
// heroes.push((marvel_hero)) push work on exicting array  but concate create new array 
// console.log(heroes);
// [ 'Ironman', 'shktikapur', 'bhuland', [ 'Nokke', 'Jokekr', 'Harder' ] ]
// console.log(heroes[3][1]);
// Jokekr
let newarr=heroes.concat(marvel_hero)
console.log(newarr);
// [ 'Ironman', 'shktikapur', 'bhuland', 'Nokke', 'Jokekr', 'Harder' ]
//  spread  method i called when ...heroes,...marvel,...etc
const all_new=[...heroes,...marvel_hero]
console.log(all_new);
// [ 'Ironman', 'shktikapur', 'bhuland', 'Nokke', 'Jokekr', 'Harder' ]

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr=another_arr.flat(Infinity)
console.log(real_arr);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ] flat(Infinity gives you depth all array )
console.log(Array.isArray("hitessh"))

// false
console.log(Array.from("hitesh"));
// [ 'h', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"hitesh"}));
// interesting  in ths formate give the parameter that from values or keys print array
// []
let n1=100
let n2=200
let n3=400
console.log(Array.of(n1,n2,n3));
// [ 100, 200, 400 ] array.of() gives the array in which you combine element reD ANYOTHER ABOUT array.is(),array.of(),array.from().