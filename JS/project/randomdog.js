let img=document.querySelector("img")
let button=document.querySelector("button")

button.addEventListener("click",async ()=>{
    let res= await fetch("https://dog.ceo/api/breeds/image/random");
    let data=await res.json()
    img.src=`${data.message}`


})
