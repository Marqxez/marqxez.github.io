// Retrieve tasks from local storage if available, otherwise initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to add a new task
function addTask() {
    const titleInput = document.getElementById('taskInput').value;
    const descriptionInput = document.getElementById('descriptionInput').value;

    if (titleInput.trim() === '') {
        alert('Please enter a task title.');
        return;
    }

    const newTask = {
        id: Date.now(),
        title: titleInput,
        description: descriptionInput,
        completed: false,
    };

    tasks.push(newTask);
    updateLocalStorage();
    renderTasks();
}

// Function to mark a task as completed or uncompleted
function toggleCompleted(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    updateLocalStorage();
    renderTasks();
}

// Function to edit a task
function editTask(taskId, newTitle, newDescription) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].title = newTitle;
    tasks[taskIndex].description = newDescription;
    updateLocalStorage();
    renderTasks();
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    updateLocalStorage();
    renderTasks();
}

// Function to filter tasks based on their completed status
function filterTasks(status) {
    if (status === 'completed') {
        const completedTasks = tasks.filter(task => task.completed);
        renderTasks(completedTasks);
    } else if (status === 'uncompleted') {
        const uncompletedTasks = tasks.filter(task => !task.completed);
        renderTasks(uncompletedTasks);
    } else {
        renderTasks();
    }
}

// Function to update tasks in local storage
function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render tasks in the DOM
function renderTasks(filteredTasks = tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    filteredTasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleCompleted(${task.id})">
            <span>${task.title}</span>
            <span>${task.description}</span>
            <button onclick="editTask(${task.id}, prompt('Enter new title:', '${task.title}'), prompt('Enter new description:', '${task.description}'))">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Initial rendering of tasks
renderTasks();
