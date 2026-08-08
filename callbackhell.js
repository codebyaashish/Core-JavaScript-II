let h2=document.querySelector("h2");

// callbach hell: problems bz of Asynchronous nature
// function changeCol(color,delay){


//     setTimeout(()=>{

//         h2.style.color=color;     

//     },delay)    

    
    
// }


// changeCol("blue",2000);   
// changeCol("orange",4000);   
// changeCol("red",6000);   
// changeCol("yellow",8000);   


///making it more compact
function changeCol(color,delay,nextcolchange){


    setTimeout(()=>{

        h2.style.color=color;   
        
        if(nextcolchange) nextcolchange();

    },delay)    

    
    
}


// callbach hell: problems bz of Asynchronous nature
changeCol("blue",2000,()=>{
    changeCol("orange",2000,()=>{
        changeCol("red",2000,()=>{
            changeCol("yellow",2000); 
        }); 
    })
});   
