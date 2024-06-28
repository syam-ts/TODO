document.addEventListener('DOMContentLoaded', function () {
    var currentDate = document.getElementById('currentDate');
    if (currentDate) {
        var options = {
            weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric'
        };
        var date = new Date().toLocaleDateString(undefined, options);
        currentDate.innerText = date;
    }
    else {
        console.error("Element with ID 'currentDate' not found");
    }
    var addButton = document.getElementById('addBtn');
    var taskInput = document.getElementById('taskInput');
    var tasks = document.getElementById('tasks');
    var clear = document.getElementById('clearAll');
    if (addButton) {
        addButton.addEventListener('click', function () {
            if (taskInput && taskInput.value.trim() !== '') {
                var newTask = document.createElement('div');
                newTask.innerText = taskInput.value;
                newTask.classList.add('task-item');
                tasks.appendChild(newTask);
                taskInput.value = '';
            }
            else {
                console.error("Please enter a task.");
            }
        });
    }
    else {
        console.error("not found");
    }
    if (clear) {
        clear.addEventListener('click', function () {
            tasks.innerHTML = '';
        });
    }
    else {
        console.error("not found");
    }
});
