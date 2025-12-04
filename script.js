const showAddTask = document.getElementById("show-add-task");
const closeAddTask = document.getElementById("close-add-task");
const taskList = document.getElementById("task-list");
const addTask = document.getElementById("add-task");

function showOrCloseModal() {
    taskList.classList.toggle("hidden");
    addTask.classList.toggle("hidden");
}

showAddTask.addEventListener("click", showOrCloseModal);
closeAddTask.addEventListener("click", showOrCloseModal);
