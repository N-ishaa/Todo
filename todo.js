let todoList = [
  {item: 'Buy Milk', 
  dueDate:'14/09/2025'
}, 
  {item: 'Go to College', 
    dueDate:'20/09/2025'
  }
];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  console.log(todoItem);
  todoList.push({item : todoItem, dueDate: todoDate});

 inputElement.value = '';
 dateElement.value = '';
 displayItems();
}

function displayItems(){
  let containerElement = document.querySelector(".todo-container");

  let newHtml = ' ';

  for(let i=0; i<todoList.length; i++){
    // let Item = todoList[i].item;
    // let dueDate= todoList[i].dueDate;
    let{item,dueDate} = todoList[i]//also write this which is called destructing 
    newHtml+= `
    <div>
    <span>${item}</span>
      <span>${dueDate}</span>
    <button onclick="todoList.splice(${i},1); 
    displayItems();">Delete</button>
    </div>
    `;
   
  }
  containerElement.innerHTML = newHtml;
}