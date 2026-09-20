// ======================================================
// TASK MANAGEMENT SYSTEM
// Sprint 1 Assessment
// ======================================================


// Get HTML elements
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");


// ======================================================
// FORM SUBMIT
// ======================================================

taskForm.addEventListener("submit", function (event) {

    // Stop page refresh
    event.preventDefault();


    // Get form fields
    const taskName = document.getElementById("taskName");
    const taskDescription = document.getElementById("taskDescription");
    const assignedTo = document.getElementById("assignedTo");
    const dueDate = document.getElementById("dueDate");
    const status = document.getElementById("status");


    // Validation flag
    let isValid = true;


    // ==================================================
    // TASK NAME VALIDATION
    // ==================================================

    if (taskName.value.trim() === "") {

        taskName.classList.add("is-invalid");
        taskName.classList.remove("is-valid");

        isValid = false;

    } else {

        taskName.classList.remove("is-invalid");
        taskName.classList.add("is-valid");

    }


    // ==================================================
    // DESCRIPTION VALIDATION
    // ==================================================

    if (taskDescription.value.trim() === "") {

        taskDescription.classList.add("is-invalid");
        taskDescription.classList.remove("is-valid");

        isValid = false;

    } else {

        taskDescription.classList.remove("is-invalid");
        taskDescription.classList.add("is-valid");

    }


    // ==================================================
    // ASSIGNED TO VALIDATION
    // ==================================================

    if (assignedTo.value.trim() === "") {

        assignedTo.classList.add("is-invalid");
        assignedTo.classList.remove("is-valid");

        isValid = false;

    } else {

        assignedTo.classList.remove("is-invalid");
        assignedTo.classList.add("is-valid");

    }


    // ==================================================
    // DUE DATE VALIDATION
    // ==================================================

    if (dueDate.value === "") {

        dueDate.classList.add("is-invalid");
        dueDate.classList.remove("is-valid");

        isValid = false;

    } else {

        dueDate.classList.remove("is-invalid");
        dueDate.classList.add("is-valid");

    }


    // ==================================================
    // STATUS VALIDATION
    // ==================================================

    if (status.value === "") {

        status.classList.add("is-invalid");
        status.classList.remove("is-valid");

        isValid = false;

    } else {

        status.classList.remove("is-invalid");
        status.classList.add("is-valid");

    }


    // ==================================================
    // STOP IF FORM IS INVALID
    // ==================================================

    if (!isValid) {
        return;
    }


    // ==================================================
    // SELECT BADGE COLOR
    // ==================================================

    let badgeClass = "bg-secondary";


    if (status.value === "TODO") {
        badgeClass = "bg-warning text-dark";
    }


    if (status.value === "IN PROGRESS") {
        badgeClass = "bg-primary";
    }


    if (status.value === "REVIEW") {
        badgeClass = "bg-info text-dark";
    }


    if (status.value === "DONE") {
        badgeClass = "bg-success";
    }


    // ==================================================
    // CREATE TASK CARD
    // ==================================================

    const taskCard = document.createElement("div");

    taskCard.className = "list-group-item task-card mb-3";


    // ==================================================
    // ADD TASK CONTENT
    // ==================================================

    taskCard.innerHTML = `

        <div class="d-flex justify-content-between">

            <h5 class="task-title">
                ${taskName.value}
            </h5>

            <span class="badge ${badgeClass}">
                ${status.value}
            </span>

        </div>


        <p>
            ${taskDescription.value}
        </p>


        <div class="small text-muted">

            <strong>Assigned To:</strong>
            ${assignedTo.value}

            <br>

            <strong>Due Date:</strong>
            ${dueDate.value}

        </div>

    `;


    // ==================================================
    // ADD CARD TO TASK LIST
    // ==================================================

    taskList.appendChild(taskCard);


    // ==================================================
    // RESET FORM
    // ==================================================

    taskForm.reset();


    // Remove validation styles
    const inputs = taskForm.querySelectorAll(
        ".form-control, .form-select"
    );


    inputs.forEach(function (input) {

        input.classList.remove("is-valid");
        input.classList.remove("is-invalid");

    });

});