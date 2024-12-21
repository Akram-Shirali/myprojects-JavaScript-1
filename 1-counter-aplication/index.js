// Elements
const counterEl = document.querySelector('.counter');
const subtractEl = document.querySelector('.subtract');
const resetEl = document.querySelector('.reset');
const addEl = document.querySelector('.add');

// Events
subtractEl.addEventListener('click', () => {
    counterEl.innerHTML--;
    changeColor();
});

resetEl.addEventListener('click', () => {
    counterEl.innerHTML = 0;
    changeColor();
});

addEl.addEventListener('click', () => {
    counterEl.innerHTML++;
    changeColor();
});

// Functions
function changeColor() {
    if (counterEl.innerHTML < 0) {
        counterEl.style.color = 'yellow';
    } else if (counterEl.innerHTML > 0) {
        counterEl.style.color = 'black';
    } else {
        counterEl.style.color = 'white';
    }
}