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

function changeQuadrant1UI(quadrant) {
    let htmlElement = "<h2>DO IT</h2>";

    if (!quadrant.length) {
        htmlElement += "<p>No task right now</p>";
    } else {
        quadrant.forEach((task) => {
            htmlElement += `
                <div class="task" id="task-${task.id}">
                    <input type="checkbox" id="task-check-${task.id}"/>
                    <label for="task-check-${task.id}" class="strikethrough"> ${task.title}</label>
                    <button type="button" class="delete-button" data-task-id="${task.id}"><i class="fa-solid fa-trash"></i>D</button>
                </div>
            `;
        });
    }
    quadrant1.innerHTML = htmlElement;
}

function changeQuadrant2UI(quadrant) {
    let htmlElement = "<h2>SCHEDULE IT</h2>";

    if (!quadrant.length) {
        htmlElement += "<p>No task right now</p>";
    } else {
        quadrant.forEach((task) => {
            htmlElement += `
                <div class="task" id="task-${task.id}">
                    <input type="checkbox" id="task-check-${task.id}"/>
                    <label for="task-check-${task.id}" class="strikethrough"> ${task.title}</label>
                    <button type="button" class="delete-button" data-task-id="${task.id}"><i class="fa-solid fa-trash"></i>D</button>
                </div>
            `;
        });
    }
    quadrant2.innerHTML = htmlElement;
}

function changeQuadrant3UI(quadrant) {
    let htmlElement = "<h2>QUICK TASK</h2>";

    if (!quadrant.length) {
        htmlElement += "<p>No task right now</p>";
    } else {
        quadrant.forEach((task) => {
            htmlElement += `
                <div class="task" id="task-${task.id}">
                    <input type="checkbox" id="task-check-${task.id}"/>
                    <label for="task-check-${task.id}" class="strikethrough"> ${task.title}</label>
                    <button type="button" class="delete-button" data-task-id="${task.id}"><i class="fa-solid fa-trash"></i>D</button>
                </div>
            `;
        });
    }
    quadrant3.innerHTML = htmlElement;
}

function changeQuadrant4UI(quadrant) {
    let htmlElement = "<h2>MAYBE LATER</h2>";

    if (!quadrant.length) {
        htmlElement += "<p>No task right now</p>";
    } else {
        quadrant.forEach((task) => {
            htmlElement += `
                <div class="task" id="task-${task.id}">
                    <input type="checkbox" id="task-check-${task.id}"/>
                    <label for="task-check-${task.id}" class="strikethrough"> ${task.title}</label>
                    <button type="button" class="delete-button" data-task-id="${task.id}"><i class="fa-solid fa-trash"></i>D</button>
                </div>
            `;
        });
    }
    quadrant4.innerHTML = htmlElement;
}

function changeUI() {
    changeQuadrant1UI(quadrant1Task);
    changeQuadrant2UI(quadrant2Task);
    changeQuadrant3UI(quadrant3Task);
    changeQuadrant4UI(quadrant4Task);
}

function deleteTask() {
    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const id = e.currentTarget.dataset.taskId;
            const quadrant = e.target.closest(".quadrant");
            const taskDiv = e.currentTarget.closest(".task");

            if (quadrant.id === "q1") {
            } else if (quadrant.id === "q2") {
                console.log("quadrant 2")
            } else if (quadrant.id === "q3") {
                console.log("quadrant 3")
            } else if (quadrant.id === "q4") {
                console.log("quadrant 4")
            }

            taskDiv.remove()
        })
    })
}

addTaskButton.addEventListener("click", addTask);
showAddTask.addEventListener("click", showOrCloseModal);
closeAddTask.addEventListener("click", () => {
    showOrCloseModal();
    changeUI();
});

document.addEventListener("DOMContentLoaded", () => {
    changeUI();
    deleteTask();
});
