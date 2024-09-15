// const myobj={
//     name:"Abhinav",
//     age:20,
//     sex:"m",
//     "full name":"Abhinav kumar Jha"
// }
// //for accesing either . or either []
// console.log(myobj.name);
// console.log(myobj["full name"]);//when using sq brackets then put it in string in idexes

// //for adding any key
// myobj.greeting=function(){
//     console.log("Hello User !!");   
// }
// console.log(myobj);
// console.log(myobj.greeting());
// // for freezing value should not be updated then use freeze  function in objects
// // Object.freeze(myobj);//value will not be updated in obj
// console.log(Object.keys(myobj));
// console.log(Object.values(myobj));
// console.log(myobj.hasOwnProperty("full name"));//check for a key that its present or not








//object assign function
// and creating new ibject with the help of existing objects 
let myo1={
    name:"Abhinav",
    class:"Btech",
    age:20
}
let myo2={
    gname:"Musafir",
    wclass:"Btech CSE",
    wage:20
}
// let myo3={...myo1,...myo2};
// console.log(myo3);


// let myo3=Object.assign({},myo1,myo2);
// console.log(myo3);


//OBJECT DESTRUCTURING
// its a way to use objects keys without using obj name ;

const {gname:g}=myo2;
console.log(g);//working  now gname is defuned as g


//json format : its nothing but a js object
// {
//     name:"wow",
//     age:20
// } 
