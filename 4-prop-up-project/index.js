const modalEl = document.querySelector('.modal');
const btnCloseEl = document.querySelector('.btn-close');
const btnTestEl = document.querySelector('.btn-test');

btnTestEl.addEventListener('click',openModal);
btnCloseEl.addEventListener('click',closeModal);
modalEl.addEventListener('click',closeModal);

function openModal (e) {
    e.preventDefault();
    modalEl.style.display = 'block';
}

function closeModal () {
    modalEl.style.display = 'none';
}