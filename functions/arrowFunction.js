//undertsanding this first 
//this referes to current context 
'use strict';

let myObj={
    userName:"AbhinavITWZ",
    gmail:"coder@google.com",
    age:20,
    greet:function(){
        console.log(this);
        console.log(`${this.userName} welcome to Adult Site`);
        
        
    }
}
//object wagerah int wagerah jitne bhi structure store karne ke liye possible h unme sirf data store hita h usko log karoge toh hi dikhega 
//dsa me data store hota h dikhane ke liye usko log toh karo
console.log(myObj.greet());

console.log(this);
