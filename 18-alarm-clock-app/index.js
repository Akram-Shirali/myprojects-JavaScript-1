const input1 = document.getElementById("time1");
const input2 = document.getElementById("time2");
const btnSet = document.querySelector(".btn1");
const btnStop = document.querySelector(".btn2");
const para = document.getElementById("para");

window.addEventListener("load",() => {
    input1.placeholder  = new Date().getHours();
    input2.placeholder  = new Date().getMinutes();
});



let alarm;
function alarmStart() {
    if(input1.value && input2.value) {
        alarm = setInterval(() => {
            setAlarm();
        },1000);
    }else{
        alert('Enter the Hours and Minutes');
    }
}

function setAlarm() {
    let date = new Date().toLocaleDateString();
    let currentTime = new Date().getTime();
    let setAlarmTime = new Date(`${date}${input1.value}:${input2.value}`).getTime();
    let distance = setAlarmTime - currentTime;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    para.innerHTML = `Alarm in::  ${hours} : ${minutes} : ${seconds}`;

    if (distance < 0) {
        clearInterval(alarm);
        para.innerHTML = `'IT'S TIME!`;
        let audio = new Audio("clock-audio.mp3");
        audio.play();
        btnStop.addEventListener('click', () => {
            para.innerHTML  = ``;
            audio.pause();
        });
    }
};

btnSet.addEventListener('click', alarmStart);