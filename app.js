function addToDo() {
    //section1:
    let todoElement = document.getElementById("new-todo");
    let todo = todoElement.value;
    todoElement.value = "";

    //section2:
    if (todo.length < 3) {
        return alert("At Least 3 Letters To Add Tasks For Todo List");
    }

    //section3:
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let text = document.createTextNode(todo);

    //section4:
    li.setAttribute("onclick", "this.remove()")
    li.appendChild(text);
    list.appendChild(li);
}