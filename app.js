function addToDo() {
    let todoElement = document.getElementById("new-todo");
    let todo = todoElement.value;
    todoElement.value = "";

    if (todo.length < 3) {
        return alert("At Least 3 Letters To Add Tasks For Todo List");
    }
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let text = document.createTextNode(todo);
    li.appendChild(text);
    list.appendChild(li);
}