const date = new Date();

const d = date.toDateString()
const year=date.getFullYear()
document.getElementById('myYear').innerHTML = year

document.getElementById('hdate').innerHTML = d