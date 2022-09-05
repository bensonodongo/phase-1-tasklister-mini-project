document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    handleToDo(e.target.new_task.value)
    
   })
  })
  
  
  function handleToDo(todo){
    let li = document.createElement('li')
    li.textContent = todo
    document.querySelector("#tasks").appendChild(li)
  }
