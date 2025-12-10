let addBtn = document.getElementById("add-btn");
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.className = "checker";
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    checkbox.onclick = function () {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        }
        else {
            span.style.textDecoration = "none";
        }
    }
    
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = taskText;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}
