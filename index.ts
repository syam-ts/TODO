document.addEventListener('DOMContentLoaded', () => {
    const currentDate = document.getElementById('currentDate') as HTMLElement;
    if (currentDate) {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric', 
            month: 'numeric',
            year: 'numeric'   
        };
        const date = new Date().toLocaleDateString(undefined, options);
        currentDate.innerText = date;
    } else {
        console.error("Element with ID 'currentDate' not found");
    }
    const addButton = document.getElementById('addBtn') as HTMLElement;
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const tasks = document.getElementById('tasks') as HTMLElement;
    
    if (addButton) {
        addButton.addEventListener('click', (e: Event) => {
            if (taskInput) {
            tasks.innerText = taskInput.value;
            } else {
                console.error("Element with ID 'taskInput' not found");
            }
        });
    } else {
        console.error("Element with ID 'addBtn' not found");
    }
    
});
