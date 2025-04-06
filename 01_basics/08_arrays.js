// Arrays 
const myarray=[0,1,2,3,4,5]
const myHeros=["shaktiman","Heera"]
const myarr2=new Array(1,3,4,5)
console.log(myarray[0])
console.log(myarr2[0])
console.log(myHeros[1])

//  Array methods 
myarray.push(6)
console.log(myarray)
// [
    0, 1, 2, 3,
    4, 5, 6
//   ]
myarray.push(8)
console.log(myarray)
// [
    0, 1, 2, 3,
    4, 5, 6, 8
//   ]
myarray.pop()
console.log(myarray)
// [
  0, 1, 2, 3,
  4, 5, 6
// ] pop function basically remove the last element which is present in the array
myarray.unshift(9)
console.log(myarray)
// [
    9, 0, 1, 2,
    3, 4, 5, 6
//   ]
// unshift() 
// method add the element at the first position in the array
  
//   shift() is opposit to the unshift method in shift() method this gives original array which is before the use of unshift () method
myarray.shift()
console.log(myarray)
// [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
console.log(myarray.includes(9))
// false 
// includes() method simply checks that element is present in the array or not 
console.log(myarray.indexOf(2))
// 2 which is present indexof funtcion simply gives the index value of a element if element is not present simpy return -1
console.log(myarray.indexOf(9))
// -1
const newarr=myarray.join()
console.log(myarray)

//[
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
console.log(newarr)
// 0,1,2,3,4,5,6 join change the data type it cinverts array into string 
console.log(typeof(newarr))
// string


//  slice,splice
console.log("A",myarray)
// A [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
console.log(myarray.slice(1,3))
// [ 1, 2 ]
console.log("B",myarray)
// B [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
console.log(myarray.splice(1,3))
// [ 1, 2, 3 ]
console.log("C",myarray)
// C [ 0, 4, 5, 6 ] splice takes last length but in irginal array he is remove that part which is given in the range but in slice() method it is only take that part which is given in the range and this is not affect the original array
