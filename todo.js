    const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
});
