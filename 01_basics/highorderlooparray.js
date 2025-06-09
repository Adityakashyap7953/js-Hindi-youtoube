// for of loop 
// The for...of loop in JavaScript is a modern and elegant way to iterate over iterable objects like arrays, strings, maps, sets, and more. It allows you to loop through the values of an iterable directly.
const arr=[1,2,3,4,5]
for(const num of arr)
{
    console.log(num); 
// 1
// 2
// 3
// 4
// 5
}
// const greatings="Hello world"
// for(const greet of greatings)
// {
   
//     console.log(`Each char is ${greet}`);
    
// }
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// for removing space use if
const greatings="Hello world"
for(const greet of greatings)
{
   if(greet==" ")
   {
    continue;
   }
    console.log(`Each char is ${greet}`);
    
}

// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d

//  Maps 
// in map unique element are combied in key value form 
const map =new Map()
map.set('In',"India")
map.set('Usa',"United State America")
map.set('fr',"france")
console.log(map);
// Output
// Map(3) {
//   'In' => 'India',
//   'Usa' => 'United State America',
//   'fr' => 'france'
// }
// console.log(typeof map);// in object for of loop is not working but in map [key,value] formate itterable 
// for(const [key,value] of map)
// {
//     console.log(key, ":-" , value);
    
// }
// Output
// In :- India
// Usa :- United State America
// fr :- france

// const myObject={
//     game1:'nfs',
//     game2:'Spiderman'
// }
// for(const [key,value] of myObject)
// {
//     console.log(key , ":-" , value);
    
// }
// output- this gives that objects is not itterabble 