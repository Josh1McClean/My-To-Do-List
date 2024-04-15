function addToDo() {
    //section1:  Getting the value of the new to-do item from the input field and clearing the input field
    let todoElement = document.getElementById("new-todo");
    let todo = todoElement.value;
    todoElement.value = "";

    //section2: Checking if the length of the to-do item is less than 3 characters and displaying an alert if it is
    if (todo.length < 3) {
        return alert("At Least 3 Letters To Add Tasks For Todo List");
    }

    //section3:  Creating a new list item element and adding the to-do text to it
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let text = document.createTextNode(todo);

    //section4: Adding an onclick event to the new list item to remove it when clicked, and appending it to the list
    li.setAttribute("onclick", "this.remove()")
    li.appendChild(text);
    list.appendChild(li);
}