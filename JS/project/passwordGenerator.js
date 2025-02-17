let pwd=document.querySelector(".pwd");
let slider=document.querySelector("#slider")
let val=slider.value;
let span=document.querySelector("span");
span.innerText=`${val}`
let btn=document.querySelector(".generate")
let cbtn=document.querySelector(".copy")

let ucase=document.querySelector("#ucase")
let lcase=document.querySelector("#lcase")
let num=document.querySelector("#num")
let symbols=document.querySelector("#symbols")

cbtn.addEventListener("click",()=>{
    window.navigator.clipboard.writeText(pwd.innerText)
    alert("copied !!")
})
slider.addEventListener("input",(e)=>{
    val=e.target.value;
    span.innerText=`${val}`
})
let upper=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`
let lower=`abcdefghijklmnopqrstuvwxyz`
let number=`0123456789`
let symbol=`!@#$%^&*()_`

console.log(ucase.checked)
btn.addEventListener("click",()=>{
    let pass="";
    let newpass="";
    if(ucase.checked){
        pass+=upper;
    }
    if(lcase.checked){
        pass+=lower;
    }
    if(num.checked){
        pass+=number;
    }
    if(symbols.checked){
        pass+=symbol;
    }
    if(pass==""){
    pwd.innerText=`please select a check box`;


        
    }
    else{
    for(let i=0;i<val;i++){
        newpass+=pass[Math.floor(Math.random()*pass.length)];

    }

    pwd.innerText=`${newpass}`;
}
})

