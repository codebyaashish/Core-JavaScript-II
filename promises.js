

// part1
// function saveToDb(data){

//     let internetSpeed=Math.floor(Math.random()*10)+1;

//     if(internetSpeed >4){
//         console.log("Your data is saved:",data);
//     }else{
//         console.log("Your data is not Saved");
//     }
// }

// part2
// function saveToDb(data,success,failure){

//     let internetSpeed=Math.floor(Math.random()*10)+1;

//     if(internetSpeed >4){
//         success();
//     }else{
//         failure();
//     }
// }
 

// saveToDb("ABC Pokhra",()=>{
    
//         console.log("Success: Your data is saved:");
//         saveToDb("lauchung trek",()=>{
//             console.log("Success2: Your data is saved:");
//             saveToDb("ooty trek",()=>{
//                 console.log("Success3: Your data is saved:");
//                 // savetodb()........
//             },()=>{
//                 console.log("failure3: Your data is not saved:");
//             })
//         },()=>{
//              console.log("failure2: Your data is not saved:");
//         })
// },()=>{
    
//         console.log("failure: Your data is not saved:");
// })



//let make it clean with this super power----> Promises



function saveToDB(data){
    return new Promise((resolve,reject)=>{
    let internetSpeed=Math.floor(Math.random()*10)+1;

    if(internetSpeed >4){
        resolve("success:Your data is saved to DB");
    }else{
        reject("Failure:Your data is saved to DB");
    }

    })
}

// let request=saveToDB("Spiderman");

// request
//     .then(()=>{
//         console.log("Spider man is my fav hero: Promise was resolved");
//         console.log(request);
//     })
//     .catch(()=>{
//         console.log("Spider is not my favorite hero: Promise was rejected");
//         console.log(request);
//     })


// or

saveToDB("Spiderman")
    .then(()=>{
        console.log("Spider man is my fav hero: Promise was resolved");
        saveToDB("Batman").then(()=>{
            console.log("Batman is my fav hero: Promise2 was resolved");
            saveToDB("Ironman").then(()=>{
                console.log("IronMan is my fav hero:Promise3 was resolved");
            })
        })
    })
    .catch(()=>{
        console.log("Promise was rejected");
        
    })


    // more compact form

    saveToDB("Spiderman")
    .then(()=>{
        console.log("Spider man is my fav hero: Promise was resolved");
        return saveToDB("Batman");
    })
    .then(()=>{
        console.log("Data2 was saved");
        return saveToDB("IronMan");
    })
    .then(()=>{
        console.log("data3 was saved");
    })
    .catch(()=>{
        console.log("Promise was rejected");
        
    })



    //result & error in pomises

    saveToDB("Spiderman")
    .then((result)=>{
        console.log("Spider man is my fav hero: Promise was resolved");
        console.log(result);
    
        return saveToDB("Batman");
    })
    .then((result)=>{
        console.log("Data2 was saved");
        console.log(result);
     
        return saveToDB("IronMan");
    })
    .then((result)=>{
        console.log("data3 was saved");
        console.log(result);
      
    })
    .catch((error)=>{
        console.log("Promise was rejected");
           console.log(error);
        
    })


