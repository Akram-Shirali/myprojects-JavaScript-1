const inputEl = document.querySelector('.input');
const submitEl = document.querySelector('.submit');
const paraEl = document.querySelector('.para');
const desriptionEl = document.querySelector('.desription');

let apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

submitEl.addEventListener("click" , ()=> {
    let inputValue = inputEl.value;
    if(inputValue === ''){
        errorMessage("Search Cannot be empty, Wtf do you think you're doing");
    }else{
        getResult(inputValue);
    }
})


function errorMessage(msg) {
    paraEl.style.display = 'block';
    paraEl.textContent = msg;
}

async function getResult(inputValue) {
    const response = await fetch(apiURL + inputValue)
    const results = await response.json();
    // console.log(results);

    if(results.query.search.length == 0) {
        return errorMessage("Invalid Search, Please Enter another search term");
    }else{
        displayResults(results);
    }
}

function displayResults(results)  {
    let outPut = "";
    results.query.search.forEach((result) => {
        let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;
        outPut+= `<div class="desription">
        <a href="${resultURL}" class="title">${result.title}</a>
        <a href="${resultURL}" class="link">${resultURL}</a>
        <p class="text">${result.snippet}</p>
        </div>`

        desriptionEl.innerHTML = outPut;
    });
}