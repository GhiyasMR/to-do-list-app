const showAddTask = document.getElementById("show-add-task");
const closeAddTask = document.getElementById("close-add-task");
const taskList = document.getElementById("task-list");
const addTaskSection = document.getElementById("add-task");
const titleInput = document.getElementById("title");
const urgencyCheckbox = document.getElementById("urgency");
const importanceCheckbox = document.getElementById("importance");
const addTaskButton = document.getElementById("add-task-button");
const quadrant1 = document.getElementById("q1");
const quadrant2 = document.getElementById("q2");
const quadrant3 = document.getElementById("q3");
const quadrant4 = document.getElementById("q4");

function showOrCloseModal() {
    taskList.classList.toggle("hidden");
    addTaskSection.classList.toggle("hidden");
}

const quadrant1Task = [];
const quadrant2Task = [];
const quadrant3Task = [];
const quadrant4Task = [];

function addTask() {
    if (titleInput.value === "") {
        alert("Please add task title");
        return;
    }

    if (urgencyCheckbox.checked && importanceCheckbox.checked) {
        quadrant1Task.push(titleInput.value);
        localStorage.setItem("quadrant1", JSON.stringify(quadrant1Task));
    } else if (importanceCheckbox.checked) {
        quadrant2Task.push(titleInput.value);
        localStorage.setItem("quadrant2", JSON.stringify(quadrant2Task));
    } else if (urgencyCheckbox.checked) {
        quadrant3Task.push(titleInput.value);
        localStorage.setItem("quadrant3", JSON.stringify(quadrant3Task));
    } else {
        quadrant4Task.push(titleInput.value);
        localStorage.setItem("quadrant4", JSON.stringify(quadrant4Task));
    }

    titleInput.value = "";
    urgencyCheckbox.checked = false;
    importanceCheckbox.checked = false;
}

addTaskButton.addEventListener("click", addTask);

showAddTask.addEventListener("click", showOrCloseModal);
closeAddTask.addEventListener("click", showOrCloseModal);
