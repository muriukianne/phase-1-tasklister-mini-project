document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let taskdescription = document.getElementById('new-task-description').value
    let duedate = document.getElementById("due_date").value
    let priority = document.getElementById("priority").value

    buildToDo(taskdescription,duedate,priority)
    form.reset()
  })

});

function buildToDo(taskdescription,duedate,priority) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  
  btn.textContent = 'x'
  li.textContent += ` *${taskdescription}   Duedate:${duedate}   Priority:${priority} `
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}