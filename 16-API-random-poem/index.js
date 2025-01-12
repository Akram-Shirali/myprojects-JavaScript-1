const btnEl = document.querySelector('.btn');
const poemEl = document.querySelector('.poem');
const api = 'https://official-joke-api.appspot.com/random_joke';


btnEl.addEventListener("click", getPoem);

async function getPoem() {
    let response = await fetch(api);
    let data = await response.json();

    console.log(data.type);

    poemEl.innerHTML = data.value.poemEl;
}

// btnEl.addEventListener("click", () => {
    // fetch(api).then(response => {
    //     return response.json();
    // }).then(data) => {
    //     poemEl.innerHTML = data.value.poemEl;
    // };
