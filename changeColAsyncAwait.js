// let h1=document.querySelector("h1");


// function changeCol(colour,delay){
    
//     return new Promise((resolve,reject)=>{

//             setTimeout(()=>{

//         h1.style.color=colour;
//         resolve();
//       },delay)
//     })
  


// }

// async function changer(){

//     await changeCol("blue",1000);
//     await changeCol("yellow",1000);

//     await changeCol("pink",1000);
//     await changeCol("violet",1000);
//     await changeCol("grey",1000);

//     return "done";


// }


// changer();





function showNum(){

    return new Promise((resolve,reject)=>{

        let num=Math.floor(Math.random()*10)*1;
        console.log(num);
        resolve();
    })

}


async function show(){

    await showNum();
    await showNum();
    await showNum();
    await showNum();
    await showNum();
    await showNum();
   

    return "yay we won!"

}


