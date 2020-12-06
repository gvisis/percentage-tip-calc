import { isNumber } from './validations.js'

const values = document.querySelectorAll('input:not([type="button"])');
const countTip = document.querySelector('.button');

let billAmount = values[0];
let percentageTip = values[1];

const tipAmount = document.getElementById('tip-total');
const total = document.getElementById('total');

countTip.addEventListener('click', e => {
    const tipTotal = Number(billAmount.value) * Number((percentageTip.value / 100)) 
    
    const totalValue = (Number(tipTotal) + Number(billAmount.value));
    if (!isNumber(tipTotal)){
        alert("Enter only numbers!")
        return false;
    }
    tipAmount.innerText = "$ " + tipTotal.toFixed(2);
    total.innerText = "$ " + totalValue.toFixed(2);
});





