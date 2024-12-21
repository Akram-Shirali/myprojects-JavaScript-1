const btnEl = document.querySelector('.btn-copy');
const inputEl = document.querySelector('.input');

btnEl.addEventListener('click', copyText);

function copyText() {
    inputEl.select();
    // inputEl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputEl.value);
    alert('Copied to Clipboard');
}