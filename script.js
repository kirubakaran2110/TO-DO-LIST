const email = "user@example.com";
const password = "password123";

function showHome() {
    hideAllContainers();
    document.getElementById('home-container').style.display = 'block';
}

function showLogin() {
    hideAllContainers();
    document.getElementById('login-container').style.display = 'block';
}

function showAbout() {
    hideAllContainers();
    document.getElementById('about-container').style.display = 'block';
}

function hideAllContainers() {
    document.querySelectorAll('.container').forEach(container => container.style.display = 'none');
}

function login() {
    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (inputEmail === email && inputPassword === password) {
        hideAllContainers();
        document.getElementById('todo-container').style.display = 'block';
    } else {
        errorMessage.textContent = "Invalid email or password.";
    }
}

function addTask() {
    const taskList = document.getElementById("task-list");
    const newTask = document.getElementById("new-task").value;
    const listItem = document.createElement("li");

    if (newTask) {
        listItem.innerHTML = `<input type="text" value="${newTask}" disabled> <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(listItem);
        document.getElementById("new-task").value = '';
    }
}

function editTask(button) {
    const input = button.parentElement.querySelector('input[type="text"]');
    if (button.textContent === "Edit") {
        input.disabled = false;
        input.focus();
        button.textContent = "Update";
    } else {
        input.disabled = true;
        button.textContent = "Edit";
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}
