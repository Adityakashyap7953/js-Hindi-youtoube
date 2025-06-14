const nums=[1,2,3]
// const mytotal=nums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval;

// }, 0)// first time accumalator value is 0 and after that in acumlator store the sum of acc+currval
// console.log(mytotal);


//  const mytotal =nums.reduce((acc,currval) => acc+currval , 0)
// console.log(mytotal);


const Shopingcart=[
{
itemName:"js cource",
price:2999
},
{
    itemName:"python",
price:999
},
{
    itemName:"js cource",
price:2999
},
{
    itemName:"data cource",
price:3999
},
]
const pricetopay=Shopingcart.reduce((acc,item) => acc+item.price,0)

console.log(pricetopay);
const allname=Shopingcart.reduce((acc,item) => acc+item.itemName,0)
console.log(allname);


