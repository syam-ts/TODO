document.addEventListener('DOMContentLoaded', function () {
    var currentDate = document.getElementById('currentDate');
    if (currentDate) {
        var options = {
            weekday: 'long',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
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
    if (addButton) {
        addButton.addEventListener('click', function (e) {
            if (taskInput) {
                tasks.innerText = taskInput.value;
            }
            else {
                console.error("Element with ID 'taskInput' not found");
            }
        });
    }
    else {
        console.error("Element with ID 'addBtn' not found");
    }
});
