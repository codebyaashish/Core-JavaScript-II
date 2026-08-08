let h1=document.querySelector("h1");






function changecol(colour,delay,nextcolchange){

    setTimeout(()=>{
        h1.style.backgroundColor=colour;
        if(nextcolchange) nextcolchange();
    },delay)
    
};

changecol("yellow",1000,()=>{
    changecol("grey",1000,()=>{
           changecol("green",1000,()=>{
            changecol("purple",1000,()=>{
                changecol("red",1000);
            });
           });
    })
});


