let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (e) {
        display.value = 'Ошибка';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = currentInput;
}
