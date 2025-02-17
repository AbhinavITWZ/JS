//map filter reduce
// 1.map
// it return the array with modified setting 
// as foreach cant return any value lekin kabhi hume agar store karna h toh kya kare 
let myArr=[1,2,3,4,5,6,7,8,9,10];
let newArr=myArr.map((e)=>{
return e*e;
}).map((e)=>{
    return e+1;
})
// console.log(newArr);

// the process of using map.map.map is called chaining


// 2.filter
// its filter the array and return array based upon a conditiion
let mynewArr2=newArr.filter(e=>{
    return e>5;
})
// console.log(mynewArr2);


// 3.reduce 
// the reduce function uses concept of accumulator and store value based upon return operation and take new value and do till last and then reduce array to certain value
let val=mynewArr2.reduce((e,v)=>{
    return e+v;
},0)//by default initial value is 0

console.log(val);



