let h1=document.querySelector("h1");



function chnagecol(colour,delay){

    return new Promise((resolve,reject)=>{

     setTimeout(()=>{
        h1.style.color=colour;
        resolve("color changed");

    },delay);



 })

  
}

chnagecol("yellow",2000).then((result)=>{
    console.log("color1 changed");
    console.log(result);

    return chnagecol("orange",2000);
})
.then((result)=>{

    console.log("color2 changed");
    console.log(result);

    return chnagecol("green",2000);


}).then((result)=>{
    console.log("color3 changed");
    console.log(result);

    return chnagecol("pink",2000);
}).then((result)=>{
      console.log("color4 changed");
    console.log(result);
})
.catch(()=>{
    console.log("color1 not changed");
})