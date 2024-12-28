const poundsEl = document.querySelector(".pounds");
const kilogramsEl = document.querySelector(".kilograms");
const gramsEl = document.querySelector(".grams");
const ouncesEl = document.querySelector(".ounces");
const containerEl = document.querySelector(".container");

containerEl.addEventListener('input',convertWeight);

function convertWeight(e) {
    if(e.target.classList.contains('pounds')) {
        let w = e.target.value;

        kilogramsEl.value = (w / 2.2046).toFixed(2);
        gramsEl.value = (w / 0.0022046).toFixed(2);
        ouncesEl.value = (w * 16).toFixed(2);
    }

    if(e.target.classList.contains('kilograms')) {
        let w = e.target.value;

        poundsEl.value = (w * 2.2046).toFixed(2);
        gramsEl.value = (w * 1000).toFixed(2);
        ouncesEl.value = (w * 35.247).toFixed(2);
    }

    if(e.target.classList.contains('grams')) {
        let w = e.target.value;

        poundsEl.value = (w * 0.0022046).toFixed(2);
        kilogramsEl.value = (w / 1000).toFixed(2);
        ouncesEl.value = (w * 0.035274).toFixed(2);
    }

    if(e.target.classList.contains('ounces')) {
        let w = e.target.value;

        poundsEl.value = (w * 0.0625).toFixed(2);
        kilogramsEl.value = (w / 35.274).toFixed(2);
        gramsEl.value = (w / 0.035274).toFixed(2);
    }
}