
const todoList = [{
    name: 'make dinner',
    dueDate: '22-12-2022'
    },
    {
        name: 'bake a cake',
        dueDate: '22-12-2022'
    }];

const renderTodo = () => {
    let todoListHtml = '';
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `<div class='todo-grid'>
            <p>${name}</p>
            <p>${dueDate}</p>
            <button 
            class='deleteBtn'>Delete
            </button>
        </div>
        `;
        todoListHtml += html;
    });
    document.querySelector(".Result").innerHTML = todoListHtml;
    document
    .querySelectorAll(".deleteBtn")
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodo();
        });
    });
}

renderTodo();

const todoBtn = document.querySelector('.todoBtn');
todoBtn.addEventListener('click', () => {
    addTodo();
})

const addTodo = () => {
    const inputElement = document.querySelector(".inputText");
    const inputDate = document.querySelector(".inputDate");
    const name = inputElement.value;
    const dueDate = inputDate.value;
    todoList.push({
        name,
        dueDate
    });
    inputElement.value = ''
    renderTodo();
}
