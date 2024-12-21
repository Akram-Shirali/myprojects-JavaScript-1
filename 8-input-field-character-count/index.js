const countEl = document.querySelector('.count');
const inputEl = document.querySelector('.input');

inputEl.addEventListener('keyup', charCount);

function charCount(e) {
    // countEl.innerHTML = inputEl.value.replace(/ /gi, "").length;
    countEl.innerHTML = inputEl.value.replace(/ /g, "").length;
}