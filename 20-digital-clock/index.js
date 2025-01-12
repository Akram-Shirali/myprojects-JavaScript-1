const dateEl = document.querySelector('.date');
const currentEl = document.querySelector('.currentTime');


showDate();
function showDate() {
    let days = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",]

    let months = ["Jan", 
    "Feb", 
    "Mar", 
    "Apr", 
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"]

    let date = new Date();

    let day = days[date.getDay()];

    let dayNumber = date.getDate();

    let month = months[date.getMonth()];

    let year = date.getFullYear();


    dateEl.innerHTML = `${day} ${dayNumber} ${month} ${year}`;

}



function showTime() {

    let date = new Date();

    let hours = date.getHours();

    let minutes = date.getMinutes();

    let seconds = date.getSeconds();

    let session = 'AM';

    if(hours == 0) {
        hours = 12;
    }

    if(hours > 12) {
        hours = hours - 12;
        session = 'PM';
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    currentEl.innerHTML = `${hours} : ${minutes} : ${seconds} ${session}`;

    showTime();
}

setInterval(showTime , 1000);


