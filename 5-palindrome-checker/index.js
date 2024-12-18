const btnEl = document.querySelector('.btn-result');
const resultEl = document.querySelector('.result');

btnEl.addEventListener("click" , checkPalindrome);

// const checkPalindrome = () => {
//     const formEl = document.querySelector('.form-control').value;

//     let len = formEl.length;
//     let start = formEl.substring(0, Math.floor(len / 2)).toLowerCase();
//     let end = formEl.substring(len - Math.floor(len / 2)).toLowerCase();

//     const revEnd = [...end].reverse().join("");

//     if (start == revEnd) {
//         resultEl.innerHTML =  `${formEl.toUpperCase()} is a palindrome.`;
//     }
//     else {
//         resultEl.innerHTML =  `${formEl.toUpperCase()} is NOT a palindrome.`;
//     }

// }

function checkPalindrome() {
    const formEl = document.querySelector('.form-control').value;

    let len = formEl.length;
    let start = formEl.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = formEl.substring(len - (0, Math.floor(len / 2))).toLowerCase();

    const revEnd = [...end].reverse().join("");

    if (start == revEnd) {
        resultEl.innerHTML =  `${formEl.toUpperCase()} is a palindrome.`;
    }
    else {
        resultEl.innerHTML =  `${formEl.toUpperCase()} is NOT a palindrome.`;
    }

}


