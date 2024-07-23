document.addEventListener('DOMContentLoaded', () => {
    const currentDate = document.getElementById('currentDate') as HTMLElement;
    if (currentDate) {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',  day: 'numeric',month: 'numeric', year: 'numeric'
        };
        const date = new Date().toLocaleDateString(undefined, options);
        currentDate.innerText = date;
    } else {
        console.error("Element with ID 'currentDate' not found");
    }

    const addButton = document.getElementById('addBtn') as HTMLElement;
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const tasks = document.getElementById('tasks') as HTMLElement;
    const clear = document.getElementById('clearAll') as HTMLElement;

    if (addButton) {
        addButton.addEventListener('click', () => {
            if (taskInput && taskInput.value.trim() !== '') {
                const newTask = document.createElement('div');
                newTask.innerText = taskInput.value;
                newTask.classList.add('task-item'); 
                tasks.appendChild(newTask);
                taskInput.value = '';
            } else {
                console.error("Please enter a task.");
            }
        });
    } else {
        console.error("not found");
    }

    if (clear) {
        clear.addEventListener('click', () => {
            tasks.innerHTML = ''; 
        });
    } else {
        console.error("not found");
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const currentDate = document.getElementById('currentDate') as HTMLElement;
    if (currentDate) {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',  day: 'numeric',month: 'numeric', year: 'numeric'
        };
        const date = new Date().toLocaleDateString(undefined, options);
        currentDate.innerText = date;
    } else {
        console.error("Element with ID 'currentDate' not found");
    }

    const addButton = document.getElementById('addBtn') as HTMLElement;
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const tasks = document.getElementById('tasks') as HTMLElement;
    const clear = document.getElementById('clearAll') as HTMLElement;

    if (addButton) {
        addButton.addEventListener('click', () => {
            if (taskInput && taskInput.value.trim() !== '') {
                const newTask = document.createElement('div');
                newTask.innerText = taskInput.value;
                newTask.classList.add('task-item'); 
                tasks.appendChild(newTask);
                taskInput.value = '';
            } else {
                console.error("Please enter a task.");
            }
        });
    } else {
        console.error("not found");
    }

    if (clear) {
        clear.addEventListener('click', () => {
            tasks.innerHTML = ''; 
        });
    } else {
        console.error("not found");
    }
});
