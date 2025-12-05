// TASK LIST SECTION
const taskList = document.getElementById("task-list");
const showAddTask = document.getElementById("show-add-task");

// QUADRANTS SECTION
const quadrant1 = document.getElementById("q1");
const quadrant2 = document.getElementById("q2");
const quadrant3 = document.getElementById("q3");
const quadrant4 = document.getElementById("q4");

// ADD TASK SECTION
const addTaskSection = document.getElementById("add-task");
const closeAddTask = document.getElementById("close-add-task");
const titleInput = document.getElementById("title");
const urgencyCheckbox = document.getElementById("urgency");
const importanceCheckbox = document.getElementById("importance");
const addTaskButton = document.getElementById("add-task-button");

// QUADRANT TASKS VARIABLE
const quadrant1Task = JSON.parse(localStorage.getItem("quadrant1")) || [];
const quadrant2Task = JSON.parse(localStorage.getItem("quadrant2")) || [];
const quadrant3Task = JSON.parse(localStorage.getItem("quadrant3")) || [];
const quadrant4Task = JSON.parse(localStorage.getItem("quadrant4")) || [];

// FUNCTIONS
function showOrCloseModal() {
    taskList.classList.toggle("hidden");
    addTaskSection.classList.toggle("hidden");
}

function addTask() {
    if (titleInput.value === "") {
        alert("Please add task title");
        return;
    }

    const taskTitle = titleInput.value;
    const uniqueID = String(Date.now()).slice(-6);

    let currentTask = {};

    if (importanceCheckbox.checked && urgencyCheckbox.checked) {
        currentTask = {
            title: taskTitle,
            id: uniqueID,
        };
        quadrant1Task.push(currentTask);
        localStorage.setItem("quadrant1", JSON.stringify(quadrant1Task));
    } else if (importanceCheckbox.checked) {
        currentTask = {
            title: taskTitle,
            id: uniqueID,
        };
        quadrant2Task.push(currentTask);
        localStorage.setItem("quadrant2", JSON.stringify(quadrant2Task));
    } else if (urgencyCheckbox.checked) {
        currentTask = {
            title: taskTitle,
            id: uniqueID,
        };
        quadrant3Task.push(currentTask);
        localStorage.setItem("quadrant3", JSON.stringify(quadrant3Task));
    } else {
        currentTask = {
            title: taskTitle,
            id: uniqueID,
        };
        quadrant4Task.push(currentTask);
        localStorage.setItem("quadrant4", JSON.stringify(quadrant4Task));
    }

    titleInput.value = "";
    urgencyCheckbox.checked = false;
    importanceCheckbox.checked = false;
}

function changeQuadrant1UI() {
    let htmlElement = "<h2>DO IT</h2>";

    if (!quadrant1Task.length) {
        htmlElement += "No task right now";
    } else {
        quadrant1Task.forEach(task => {
            htmlElement += `
                <div class="task">
                    <input type="checkbox" id="${task.id}"/>
                    <label for="${task.id}" class="strikethrough"> ${task.title}</label>
                    <button type="button" class="delete-button"><i class="fa-solid fa-trash"></i></button>
                </div>
            `
        })
    }
    quadrant1.innerHTML = htmlElement;
}

function changeQuadrant2UI() {
    let htmlElement = "<h2>SCHEDULE IT</h2>";

    if (!quadrant2Task.length) {
        htmlElement += "No task right now";
    } else {
        quadrant2Task.forEach(task => {
            htmlElement += `
                <div class="task">
                    <input type="checkbox" id="${task.id}"/>
                    <label for="${task.id}" class="strikethrough"> ${task.title}</label>
                    <button type="button" class="delete-button"><i class="fa-solid fa-trash"></i></button>
                </div>
            `
        })
    }
    quadrant2.innerHTML = htmlElement;
}
function changeQuadrant3UI() {
    let htmlElement = "<h2>QUICK TASK</h2>";

    if (!quadrant3Task.length) {
        htmlElement += "No task right now";
    } else {
        quadrant3Task.forEach(task => {
            htmlElement += `
                <div class="task">
                    <input type="checkbox" id="${task.id}"/>
                    <label for="${task.id}" class="strikethrough"> ${task.title}</label>
                    <button type="button" class="delete-button"><i class="fa-solid fa-trash"></i></button>
                </div>
            `
        })
    }
    quadrant3.innerHTML = htmlElement;
}
function changeQuadrant4UI() {
    let htmlElement = "<h2>MAYBE LATER</h2>";

    if (!quadrant4Task.length) {
        htmlElement += "No task right now";
    } else {
        quadrant4Task.forEach(task => {
            htmlElement += `
                <div class="task">
                    <input type="checkbox" id="${task.id}"/>
                    <label for="${task.id}" class="strikethrough"> ${task.title}</label>
                    <button type="button" class="delete-button"><i class="fa-solid fa-trash"></i></button>
                </div>
            `
        })
    }
    quadrant4.innerHTML = htmlElement;
}

function changeUI () {
    changeQuadrant1UI();
    changeQuadrant2UI();
    changeQuadrant3UI();
    changeQuadrant4UI();
}

addTaskButton.addEventListener("click", addTask);
showAddTask.addEventListener("click", showOrCloseModal);
closeAddTask.addEventListener("click", () => {
    showOrCloseModal();
    changeUI();
});

document.addEventListener("DOMContentLoaded", changeUI);