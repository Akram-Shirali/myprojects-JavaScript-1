const cup = document.getElementsByClassName(".big-cup"); 
const remained = document.querySelector(".remained");
const litres = document.querySelector("#litres"); 
const percentage = document.querySelector(".percentage"); 
const smallCups = document.querySelectorAll(".cup-small");

updateBigCup();

smallCups.forEach((singleCup, index1) => {
    singleCup.addEventListener('click', () => highlightCups(index1))
    // console.log(index1);
})

function highlightCups(index1) {
    if (smallCups[index1].classList.contains('full') && !smallCups[index1].nextElementSibling.classList.contains('full')){
        index1--;
    }
    smallCups.forEach((singleCup, index2) => {
        if (index2 <= index1) {
            singleCup.classList.add('full');
        }else{
            singleCup.classList.remove('full');
        }
    })
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible'; 
        percentage.style.height = (`${fullCups / totalCups * 330 }px`);
        percentage.innerText = `${ (fullCups / totalCups * 100)}%`; 
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        remained.style.visibility = 'visible';
        litres.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}
