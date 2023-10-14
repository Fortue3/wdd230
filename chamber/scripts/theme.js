const checkbox = document.getElementById('dark-mode');
const eventDiv = document.querySelector('.event');
const weatherDiv = document.querySelector('.weather');
const h3s = document.querySelectorAll('h3');
const joinSec = document.querySelector('.join');
const newsSec = document.querySelector('.news');
const sideSec = document.querySelector('.sidebar');
// const joinPageSec = document.querySelector('.join-main-container');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    eventDiv.classList.toggle('dark');
    weatherDiv.classList.toggle('dark');
    joinSec.classList.toggle('dark');
    newsSec.classList.toggle('dark');
    sideSec.classList.toggle('dark');
    // joinPageSec.classList.toggle('dark');
    for(const h3 of h3s) {
        h3.classList.toggle('dark');
    }
})