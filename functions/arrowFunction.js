// // //undertsanding this first 
// // //this referes to current context 
// // 'use strict';

// // let myObj={
// //     userName:"AbhinavITWZ",
// //     gmail:"coder@google.com",
// //     age:20,
// //     greet:function(){
// //         console.log(this);
// //         console.log(`${this.userName} welcome to Adult Site`);
        
        
// //     }
// // }
// // //object wagerah int wagerah jitne bhi structure store karne ke liye possible h unme sirf data store hita h usko log karoge toh hi dikhega 
// // //dsa me data store hota h dikhane ke liye usko log toh karo
// // console.log(myObj.greet());

// // console.log(this);



// // let oname=()=>{
// //     console.log(this);//arrow function dont have their own this context they take it/inherit from lexical(or parent) scope
    
// // }
// // oname()

// //IIFE:IMMEDIATE INVOKE FUNCTION EXPRESSION
// // its just used for avoiding global polution like we are using var in global and it shoulld not be affected by function var
// (function name(){
//     console.log(this);
    
// })();//once Once IIFE is invoked then it should be and by adding a semicolon
// (()=>{
//     console.log(this);
    
// })();

let i=5;
do{
    console.log('wow youre good !!');
    i=i-1;
    console.log(i);
    

    
}while(i>=1);