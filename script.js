let result = document.getElementById('result');
let history = document.getElementById('history');
let calculationHistory = [];

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    let calculation = result.value + ' = ' + eval(result.value);
    calculationHistory.push(calculation);
    history.innerHTML = '';
    for (let i = 0; i < calculationHistory.length; i++) {
        let p = document.createElement('p');
        p.textContent = calculationHistory[i];
        history.appendChild(p);
    }
    result.value = eval(result.value);
}