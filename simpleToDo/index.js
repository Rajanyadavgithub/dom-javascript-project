//console.log("hello todo")

const addBtn = document.getElementById('add-btn')

const addInput = document.getElementById('add-input')
const ulList = document.getElementById('todo-list')

addBtn.addEventListener('click',()=>{

   //console.log(addInput.value)
   const task = addInput.value

   const li = document.createElement('li')
   li.innerText= task
   

   const deleteTask = document.createElement('button')
   deleteTask.innerText = "X"

   li.appendChild(deleteTask)
   deleteTask.addEventListener('click', ()=>{
    li.remove()
   })
   
  ulList.append(li)

  addInput.value = "";


})