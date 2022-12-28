
var count = 1;

var btnMinus = document.getElementById('amount-control-minus');
var btnPlus = document.getElementById('amount-control-plus');
var amountDisplay = document.getElementById('amount-control-amount');

amountDisplay.onblur = function() {
    amountDisplay.textContent = amountDisplay.textContent.replaceAll(' ', '');
    let intVal = parseInt(amountDisplay.textContent);
    if (intVal >= 1) {
        amountDisplay.textContent = "" + parseInt(amountDisplay.textContent);
    } else {
        amountDisplay.textContent = "1";
    }
}

btnMinus.onclick = function(e) {
    if (count > 1) {
        count -= 1;
        amountDisplay.textContent = count;
    }
}

btnPlus.onclick = function(e) {
    count += 1;
    amountDisplay.textContent = count;
}