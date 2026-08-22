/**<h1>To do App</h1>
    <h3>Enter "List" to show all tasks</h3>
    <h3>Enter "add" to add a task</h3>
    <h3>Enter "delete" to remove a task</h3>
    <h3>Enter "quit" to quit todo</h3> **/


    let todo=[];  

    let req=prompt(`Enter your request`);

    while(true){

     if(req=="quit"){
        console.log("you Quitted");
        break;
     }

     if(req=="List"){
         console.log("----------")
       
         for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
         }
   console.log("--------------");
        
     
    
     }else if(req=="add"){
        console.log("Enter element to push");
        let item=prompt("Enter todo item");
        todo.push(item);
        console.log("you added",item);

     }else if(req=="delete"){
         
        console.log("enter index number to delete");
        let indx=prompt(`enter index number to delete`);

        todo.splice(indx,1);
        console.log("task deleted");


     }else{
        console.log("Wrong request");
     }

     req=prompt(`Enter request`);
    }
    