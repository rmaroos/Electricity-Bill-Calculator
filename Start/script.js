// JavaScript for Date and Time
function updateDateTime() {
    const date = new Date();
    document.getElementById('date').innerText = date.toDateString();
    document.getElementById('time').innerText = date.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();
