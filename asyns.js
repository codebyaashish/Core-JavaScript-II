async function greet(){    //it retuns promise      
    return "Good Morning!";
}


greet().then((result)=>{
    console.log(result);
    console.log("Promise is fulfilled")
}).catch((error)=>{
    console.log("promise is rejected");
    console.log(error);
})

