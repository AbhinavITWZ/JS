//array 
let arr=[1,2,3,4,5,6];

//important array ke functions

//js me har cheez obj h toh obj ke feature bhi honge jo kuch help kare hamari us object ke liye 
//jaise bane banaye functions

console.log(arr.push(11,23));//add karega last
console.log(arr)

console.log(arr.pop())
console.log(arr.pop())

console.log(arr.concat(12,13));
console.log(arr)

console.log(arr+[1,2,3]);//coercion
let brr=['H','e','l','l','o'];
console.log(brr.join("%"));//array ko wapis string banadega seperator laga ke coma ki jagah "H%E%L%L%O"

console.log(arr.length);
console.log(arr.reverse());

console.log(arr.shift());
console.log(arr.unshift(1,2,4));
console.log(arr);


console.log(arr.slice(1,4));
console.log(arr)

console.log(arr.splice(1,4));//original array se modify karke us index ke range ke elements ko remove kar deta h kind of
console.log(arr)



//destrucuturing of array
// let val1=arr[0];   it becomes very tedious
// let val2=arr[1];

//easily destructure ke liye taaki hum variables bana sake us value ke liye array ke 
//taaki easily varaiables bana sake different value or easy syntax pade 
let [val1,val2]=arr;
console.log(val1,val2);


//Objects
let myObj={
    mname:"Musafir",
    age:20,
    married:false
}
console.log(myObj.mname);
console.log(myObj["mname"]);

console.log(myObj.married);


//array of objects
let arro=
[{ mname:"Musafir",
    age:20,
    married:false

},
{
    mname:"Musafir",
    age:20,
    married:false

},
{
    mname:"Musafir",
    age:20,
    married:false

}

] //mostly seen in structure of apis 

console.log(arro[0].mname);
let boj={}

//Object data types ki properties
console.log(Object.keys(myObj));//array of keys
console.log(Object.values(myObj));//array of values
console.log(Object.entries(myObj));//array of arrays ....smaller enteries h wo key or values as element store karte h in array
console.log(Object.assign(boj,myObj))




//for in  and   for of  loop

//for in ......objects
//for of ......arrays/strings


for(let val in myObj){
    console.log(myObj[val]);
    
}
for(let val of arro){
    console.log(val)
}




//ES6 features
//template literals ....... easy syntax for inserting variables within string
let str="Musafir"
console.log(`${str},kaise ho phir !!`)
console.log(`wow what a magic ${str}`)


//rest and spread operator (...)

let newarr=[...arr,...arro] //sabhi element ko spread kar dega
console.log(newarr)

//rest operator

let [v1,...rest]=arr
console.log(rest)







