
//understanding scope in js and hoisting in js 
// it means that we can call a fn before it declaration but it depend upon how we are declaring it

one() //it will work fine but another method discussed down will not be working
function one(){
    let userName="Abhinav";
    function two(){
        let age=20;
        console.log(userName);
    }
    // console.log(age);
    two()
    console.log(this);
    

}

// one() //it will not work fine but another method discussed above will be working

// const one =function(){
//     let userName="Abhinav";
//     function two(){
//         let age=20;
//         console.log(userName);
//     }
//     // console.log(age);
//     two()

// }


