const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            operator = null;
            previousInput = '';
            display.textContent = '';
        } else if (value === '=') {
            if (operator && previousInput !== '') {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                display.textContent = currentInput;
                operator = null;
                previousInput = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});