const buttonEl = document.querySelector('.button');
const tipEl = document.querySelector('.tip');
const totalEl = document.querySelector('.total');
const errorEl = document.querySelector('.error');

const hideErrors = () => {
    setTimeout(() => {
        errorEl.style.display = "none";
    },3000)
}

const calculateTip = () => {
    const bill = document.querySelector('.form-control').value;
    const rate = document.querySelector('.form-select').value;

    if(bill === '' || rate == '') {
        errorEl.style.display = 'block';
        hideErrors();
    }else if(isNaN(bill)){
        errorEl.innerHTML = 'Please input a number';
        errorEl.style.display = 'block';
        hideErrors();
    }
    else{
        hideErrors();
        let tipAmount = bill * rate;
        tipAmount = Math.ceil(tipAmount);
        tipEl.innerHTML = `Tip: $${tipAmount}`;

        let totalBill = Number(bill) + tipAmount;
        totalEl.innerHTML = `Total : $${totalBill}`;
    }
}

buttonEl.addEventListener('click',calculateTip);