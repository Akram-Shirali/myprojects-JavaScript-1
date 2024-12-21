const inputEl = document.querySelector('.input');
const listLiEl = document.querySelectorAll('li');

inputEl.addEventListener('keyup', searchList);

function searchList() {
    const inputValue = input.value;

    for(let i = 0; i < listLiEl.length; i++) {
        if(listLiEl[i].innerHTML.toLowerCase().includes(inputValue)) {
            listLiEl[i].style.display = '';
        }
        else {
            listLiEl[i].style.display = 'none';
        }
    }
}