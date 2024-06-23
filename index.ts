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
});
