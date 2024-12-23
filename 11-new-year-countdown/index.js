const newYear = "1 Jan 2025";

const date = setInterval(() => {
    const endDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const countDown = document.getElementById("text");
    countDown.innerHTML= `${days} Days : ${hours} Hours : ${minutes} Min : ${seconds} S`;


    if(totalSeconds < 0) {
        clearInterval(date);
        countDown.textContent = 'Happy New Year!'
    }
}, 1000);

// innerHTML = textContent