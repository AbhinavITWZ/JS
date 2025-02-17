let items=document.querySelectorAll(".items");
let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");

let data="";

box2.addEventListener("dragover",(e)=>{
    e.preventDefault()

})

box1.addEventListener("dragover",(e)=>{
    e.preventDefault()

})
for (let item of items) {
    item.addEventListener("dragstart",(e)=>{
        data=e.target;
    })
}

box2.addEventListener("drop",()=>{
    box2.append(data)
    
})

box1.addEventListener("drop",()=>{
    box1.append(data)
    
})


