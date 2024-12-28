const btnEl = document.querySelector(".btn");
const resultConEl = document.querySelector(".result-con");
const resultEl = document.querySelector(".result");
let bmi;

btnEl.addEventListener("click",getBmi);

function getBmi() {
    let heightEl = document.querySelector(".height").value;
    let weightsEl = document.querySelector(".weights").value;

    if(heightEl === '' && weightsEl === '') {
       resultEl.innerHTML = 'Enter valid height and weight';
       resultConEl.style.background = 'yellow';
    }

    else if(heightEl === '' || isNaN(heightEl)) {
        resultEl.innerHTML = 'Enter a valid height';
        resultConEl.style.background = 'yellow';
     }

     else if(weightsEl === '' || isNaN(weightsEl)) {
        resultEl.innerHTML = 'Enter a valid weight';
        resultConEl.style.background = 'yellow';
     }

     else {
        bmi = ((weightsEl / heightEl /heightEl) * 10000).toFixed(2);
        getColor();
        resultEl.innerHTML = `${findweight()} ${bmi}`;
     }

}

function findweight () {
    if(bmi < 15) {
        return resultEl.innerHTML = "Underweight: ";
    }
    else if(bmi > 15 && bmi <= 27) {
        return resultEl.innerHTML = "Normal: ";
    }
    else {
        return resultEl.innerHTML = "Overweight: ";
    }
}
 
function getColor () {
    if(bmi < 15) {
        resultConEl.style.backgroundColor = 'skyblue';
    }
    else if(bmi > 15 && bmi <= 27) {
        resultConEl.style.backgroundColor = "green";
    }
    else {
        resultConEl.style.backgroundColor = "red";
    }
}
