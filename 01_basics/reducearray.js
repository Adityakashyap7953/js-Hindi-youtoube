const nums=[1,2,3]
const mytotal=nums.reduce(function(acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc+currval;

}, 0)// first time accumalator value is 0 and after that in acumlator store the sum of acc+currval
console.log(mytotal);
