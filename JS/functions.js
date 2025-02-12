//revisiting function using pallindrome example
function checkPallindrome(num){
    let rev=0;
    let temp=num;
    while(temp>0){
        rev=(rev*10)+(temp%10);
        temp=Math.floor(temp/10);

    }
    if(rev==num) console.log("pallindrome !!");
    else console.log('Not pallindrome');
}

checkPallindrome(1213)
checkPallindrome(121)



//js me har cheez object ki form ki hoti h 
// yaani ki usme bahut saare functions honge toh usko hum dekhte h
//useful objects number,math,string ke functions ko chliye dekhte h 


//Math
console.log(Math.floor(12.3)); //12 or 13 ki neechi value dega
console.log(Math.ceil(12.3)); //12 or 13 ki upar value dega
console.log(Math.max(1,23,4,5));
console.log(Math.min(1,23,4,5));
//  ek import function math ka random() h jo ki 0 or 1 ke beech me random values deta h [0,1)
//lets generate random number bw 1 to 6 like a dice

let min=5;
let max=10;
let random = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random);

console.log(Math.pow(2,3))
console.log(Math.round(23.4459)) //integer deta h return karke




//string
let str="aello PW"
console.log(str.charAt(0));
console.log(str.indexOf("P"));
console.log(str.length);
console.log(str.charCodeAt(5));
console.log(str.at(-2));
console.log(str.charAt(str.length-2));
console.log(str.slice(-4,-1));
console.log(str.slice(-4));
console.log(str.substring(1,4));
console.log(str.substring(-3));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.concat(" ","is best "));
console.log(str.replace("AEL","hel"));
console.log(str.split());//string to array banane ke liye kaam aata h
console.log(str.split(" ")); //array de deta h hume
console.log(typeof NaN);




//Date
let date=new Date();
//dates object wo.. static value us waqt ki dikahega ye nhi ki change bhi ho rha h ya ho rha hoga 
//agar mne likha h ki new Date(8640000) toh 1 jan 1970 me wo plus hoga or bange jaise 2 jan 1970 ...

//displaying dates 
//by default toString() method ka use karta h 
console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleString());





























