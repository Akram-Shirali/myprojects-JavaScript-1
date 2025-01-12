const btnAgain = document.querySelector(".btn");
const randNum = document.querySelector(".result");
const guessNum = document.querySelector("#input-num");
const btnCheck = document.querySelector("#btn-check");
const message = document.querySelector("#para");
const score = document.querySelector("#score");
const highscore = document.querySelector("#highscore");

btnAgain.addEventListener("click", resetAll);
btnCheck.addEventListener("click", checkTwo);

function genRandom() {
  return Math.floor(Math.random() * 20 + 1);
}

function compare(a, b) {
  if (a === b) {
    return "yes";
  } else if (a > b) {
    if (a - b > 5) {
      return "low";
    } else {
      return "close";
    }
  } else {
    if (b - a > 5) {
      return "high";
    } else {
      return "close";
    }
  }
}

var random = Number(genRandom());
score.innerText = 20;
highscore.innerText = 0;


function checkTwo(){
    var guessed = Number(guessNum.value);
    var result = compare(random , guessed);

    if(result === 'yes') {
        message.innerText = "You got it Man!";
        randNum.innerText = random;
        if(Number(highscore.innerText) < Number(score.innerText)){
            highscore.innerText = score.innerText;
        }
        
        
    }else{
        message.innerHTML = result;
        score.innerText = Number(score.innerText) - 1;
    }
}


function resetAll(){
    score.innerText = 20;
    random = Number(genRandom());
    message.innerText = "Start guessing...";
    guessNum.value = ''
    randNum.innerText = '?'
}

