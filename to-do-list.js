
const todoList = ['make dinner','bake a cake'];

renderTodo();

function renderTodo() {
    let todoListHtml=''
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        const deleteButton='<button>Delete</button>'
        todoListHtml += html;
    }
    document.querySelector(".result").innerHTML=todoListHtml;
}

function addTodo() {
    const inputElement = document.querySelector(".inputText");
    const value = inputElement.value;
    todoList.push(value);
    inputElement.value = ''
    console.log(todoList)
    renderTodo();
}
