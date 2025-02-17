let p=new Promise((res,rej)=>{

    setTimeout(()=>{
        res("resolved")
    },2000)
})

setTimeout(()=>{
    console.log("hiii")
},2000)
p.then((val)=>{
    
        console.log(val)
    
})