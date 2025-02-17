let body=document.querySelector("body");


let vals="0123456789abcdef";
function bgChanger(){
    let randCol=""
   for(let i=0;i<6;i++){
    randCol+=vals[Math.floor(Math.random()*vals.length)]
    
}
   body.style.backgroundColor=`#${randCol}`;

}

setInterval(bgChanger,1000)