const btnEl = document.querySelector('.btn');
const resultEl = document.querySelector('.result-text');

let word = document.querySelector('.input');


btnEl.addEventListener('click', checkVowel);

function checkVowel() {
    let countVowel = 0;
    let wordVowel = word.value.toLowerCase();

    for (let i = 0; i < wordVowel.length; i++) {
        let letter = wordVowel[i];
        if (letter == 'a' || letter == 'o' || letter == 'u' || letter == 'e' || letter == 'i') {
            countVowel++;
        }
    }
    resultEl.innerHTML = `${wordVowel.toUpperCase()} has ${countVowel} vowels.`;
}