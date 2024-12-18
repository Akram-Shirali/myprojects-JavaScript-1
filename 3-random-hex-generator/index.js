// let hsxEl = document.querySelector('.number-hsx');
// let btnEl = document.querySelector('.btn');



// const changeBackgroundColor = () => {
//     const random = Math.random().toString(16).substring(2,8);
//     document.body.style.background = "#" + random;
//     hsxEl.innerHTML = "#" + random;
// }

// btnEl.addEventListener('click' ,changeBackgroundColor);

// changeBackgroundColor();


const hsxEl = document.querySelector('.number-hsx');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click' ,changeBackgroundColor);

function changeBackgroundColor() {
    const random = Math.random().toString(16).substring(2,8);
    document.body.style.background = "#" + random;
    hsxEl.innerHTML = "#" + random;
}
