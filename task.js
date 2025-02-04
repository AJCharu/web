// Get task list element
const taskListElement = document.getElementById("task-list");

// Get task input element
const taskInputElement = document.getElementById("task-input");

// Get add task button element
const addTaskButtonElement = document.getElementById("add-task-button");

// Task list array
let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

// Add event listeners
addTaskButtonElement.addEventListener("click", addTask);
taskInputElement.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// Add task function
function addTask() {
    const task = taskInputElement.value.trim();
    if (task) {
        taskList.push({ task, completed: false });
        localStorage.setItem("taskList", JSON.stringify(taskList));
        renderTaskList();
        taskInputElement.value = "";
    }
}

// Render task list function
function renderTaskList() {
    taskListElement.innerHTML = "";
    taskList.forEach((task, index) => {
        const taskElement = document.createElement("li");
        taskElement.textContent = task.task;
        if (task.completed) {
            taskElement.classList.add("completed");
        }
        taskElement.addEventListener("click", () => {
            task.completed = !task.completed;
            localStorage.setItem("taskList", JSON.stringify(taskList));
            renderTaskList();
        });
        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.textContent = "Remove";
        deleteButtonElement.addEventListener("click", () => {
            taskList.splice(index,1);
            localStorage.setItem("taskList", JSON.stringify(taskList));
            renderTaskList();
        });
        taskElement.appendChild(deleteButtonElement);
        taskListElement.appendChild(taskElement);
    });
}

// Initial render
renderTaskList();