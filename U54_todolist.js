
// init
let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
<input type="checkbox" name="done" class="barry" enable >
<label for="todo">${text}</label>
<button type="submit" class="btn btn-danger btn-sm delete" name='done' disabled >delete</button>
<button type="submit" class="delete fa fa-trash"  enable></i>
  `
  list.appendChild(newItem)
}
// write your code here


const newTodo = document.querySelector('#newTodo')
const addBtn = document.querySelector('#addBtn')
const doneTodo = document.querySelector('#done-todo')

// Add Todo
addBtn.addEventListener('click', function (event) {
  let inputValue = newTodo.value
  if (inputValue) {
    addItem(inputValue)
    newTodo.value = ''
  }
})


newTodo.addEventListener('keypress', function (item) {
  if (event.keyCode == 13 && newTodo.value) {
    addItem(newTodo.value)
    newTodo.value = ''
  }
})


//勾選才可以delete // 該怎麼做
list.addEventListener('click', function (event) {

  if (event.target.classList.contains('barry')) {
    //啟動input 

    //開啟delete disabled => enable 

  }
})


// Delete Todo
list.addEventListener('click', function (event) {
  let li = event.target.parentElement
  if (event.target.classList.contains('delete')) {
    let r = confirm('Are you sure to delete？')
    if (r) { li.remove() }
  }
})

// //delete 2 
// list.addEventListener('click', (event) => {
//   if (event.target.classList.contains('btn')) {
//     let r = confirm('Are you sure to delete？')
//     if (r) { li.remove() }
//   }

// })



list.addEventListener('click', function (event) {
  let li = event.target.parentElement
  if (event.target.tagName === 'LABEL') {
    event.target.classList.toggle('checked')
    let doneItem = document.createElement('li')
    doneItem.innerHTML = li.innerHTML
    doneTodo.appendChild(doneItem)
    li.remove()
  }
})



// Delete 在 Done

doneTodo.addEventListener('click', function (event) {
  let li = event.target.parentElement
  if (event.target.classList.contains('delete')) {
    let r = confirm('Are you sure to delete?')
    if (r) {
      li.remove()
    }
  }
})


//Done list  到  Todo list
doneTodo.addEventListener('click', function (event) {
  if (event.target.tagName === 'LABEL') {
    event.target.classList.toggle('checked')
    let reverseItem = document.createElement('li')
    reverseItem.innerHTML = li.innerHTML
    list.appendChild(reverseItem)
    li.remove()
  }
})