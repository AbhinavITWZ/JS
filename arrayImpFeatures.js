let arr=[1,2,3,5,6]
console.log(arr)

// newArr=arr.forEach((val)=>{
//     //  return (val)//not possible in for each loop
//     console.log(val)

// })

let newArr=arr.map((v)=> v+5)
console.log(newArr)
let newArr1=arr.map((v)=> {
    if(v<5) return v;
})
console.log(newArr1)


let filter=arr.filter((v)=>{
    return v<5
})
console.log(filter)

let reduce=arr.reduce((sum,cv)=>{
    return sum+=cv
},0)
console.log(reduce)


let players=[
    {
        pname:"Rohit Sharma",
        course:"Btech",
        branch:"civil"
    },
    {
        pname:"hardik Sharma",
        course:"Btech",
        branch:"cse"
    },
    {
        pname:"virat kohli",
        course:"Btech",
        branch:"cse"
    },
    {
        pname:"pujara",
        course:"Btech",
        branch:"civil"
    }
]

let filters=players.filter((v)=> v.branch=="civil")
                   .map((v)=> v.pname) //chaining

console.log(filters)