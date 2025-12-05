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

const quadrant1Task = JSON.parse(localStorage.getItem("quadrant1")) || [];
const quadrant2Task = JSON.parse(localStorage.getItem("quadrant2")) || [];
const quadrant3Task = JSON.parse(localStorage.getItem("quadrant3")) || [];
const quadrant4Task = JSON.parse(localStorage.getItem("quadrant4")) || [];

function addTask() {
    if (titleInput.value === "") {
        alert("Please add task title");
        return;
    }

    if (urgencyCheckbox.checked && importanceCheckbox.checked) {
        quadrant1Task.push(titleInput.value);
    } else if (importanceCheckbox.checked) {
        quadrant2Task.push(titleInput.value);
    } else if (urgencyCheckbox.checked) {
        quadrant3Task.push(titleInput.value);
    } else {
        quadrant4Task.push(titleInput.value);
    }

    localStorage.setItem("quadrant1", JSON.stringify(quadrant1Task));
    localStorage.setItem("quadrant2", JSON.stringify(quadrant2Task));
    localStorage.setItem("quadrant3", JSON.stringify(quadrant3Task));
    localStorage.setItem("quadrant4", JSON.stringify(quadrant4Task));

    titleInput.value = "";
    urgencyCheckbox.checked = false;
    importanceCheckbox.checked = false;
}

function changeUI() {
    // TODO: Refactor later, i guess
    if (!quadrant1Task.length) {
        quadrant1.innerHTML = `
            <h2>DO IT</h2>
            <p>No task right now</p>
        `;
    } else {
        let htmlElement1 = "<h2>DO IT</h2>";
        quadrant1Task.forEach((task) => {
            htmlElement1 += `
            <label><input type="checkbox" class="tasks"> ${task}</label><br>
        `;
        });
        quadrant1.innerHTML = htmlElement1.trim();
    }

    if (!quadrant2Task.length) {
        quadrant2.innerHTML = `
            <h2>SCHEDULE IT</h2>
            <p>No task right now</p>
        `;
    } else {
        let htmlElement2 = "<h2>SCHEDULE IT</h2>";
        quadrant2Task.forEach((task) => {
            htmlElement2 += `
            <label><input type="checkbox" class="tasks"> ${task}</label><br>
        `;
        });
        quadrant2.innerHTML = htmlElement2.trim();
    }

    if (!quadrant3Task.length) {
        quadrant3.innerHTML = `
            <h2>QUICK TASK</h2>
            <p>No task right now</p>
        `;
    } else {
        let htmlElement3 = "<h2>QUICK TASK</h2>";
        quadrant3Task.forEach((task) => {
            htmlElement3 += `
            <label><input type="checkbox" class="tasks"> ${task}</label><br>
        `;
        });
        quadrant3.innerHTML = htmlElement3.trim();
    }

    if (!quadrant4Task.length) {
        quadrant4.innerHTML = `
            <h2>MAYBE LATER</h2>
            <p>No task right now</p>
        `;
    } else {
        let htmlElement4 = "<h2>MAYBE LATER</h2>";
        quadrant4Task.forEach((task) => {
            htmlElement4 += `
            <label><input type="checkbox" class="tasks"> ${task}</label><br>
        `;
        });
        quadrant4.innerHTML = htmlElement4.trim();
    }
}

addTaskButton.addEventListener("click", addTask);

showAddTask.addEventListener("click", showOrCloseModal);
closeAddTask.addEventListener("click", () => {
    showOrCloseModal();
    changeUI();
});

document.addEventListener("DOMContentLoaded", changeUI);
