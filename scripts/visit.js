const displayVisits = document.querySelector('.visits');


let numberVisits = Number(window.localStorage.getItem('numberVisits-ls')) || 0;


if (numberVisits != 0) {
    displayVisits.textContent = numberVisits;
}
else {
    displayVisits.textContent = 'Welcome! 🫡';
}

numberVisits++;

localStorage.setItem('numberVisits-ls', numberVisits);