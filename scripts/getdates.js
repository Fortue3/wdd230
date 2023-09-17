// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
const message = document.querySelector("#emessage");

// Try to complete the method with options
try {
    const options = {
        weekday: "",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>!`;
} catch (e) {
    console.log("Error with code or your browser does not support Locale");
}

// Long hand method ... building day and month names from built-in date methods.
const daynames = [
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "December"
];
const d = new Date();
const dayName = d.getDay();
const monthName = d.getMonth() + 1;
const year = d.getFullYear();
const hr = d.getHours();
const mins = d.getMinutes();
const sec = d.getSeconds();
const fulldate = `${monthName}/${d.getDate()}/${year} ${hr}:${mins}:${sec}`;
document.querySelector("#date2").textContent = "last updated:" + fulldate;
document.querySelector("#myYear").textContent = year;

