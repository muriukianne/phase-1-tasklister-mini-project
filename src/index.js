document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createtask = document.getElementById ("create-task-form")
  createtask.addEventListener ('submit', (event) => {
    event.preventDefault();

     const taskdescription = document.getElementById("new-task-description").value ;
     const duedate = document.getElementById("due_date").value ;
     const priority = document.getElementById("priority").value ;

     console.log( taskdescription , duedate , priority )
     
     tasks.innerHTML += `<h5>* ${taskdescription}</h5> <h5>Duedate: ${duedate} </h5> <h5>Priority: ${priority} </h5> `;

     })

     })
     

    
