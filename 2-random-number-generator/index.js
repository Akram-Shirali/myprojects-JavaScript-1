const numberEl = document.querySelector(".number");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener('click' , generatRandomNumber);

function generatRandomNumber() {
    const random = Math.floor(Math.random()*100 + 1);
    numberEl.innerHTML = random;
    numberEl.style.color = 'darkgreen'
}