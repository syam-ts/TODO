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
});
