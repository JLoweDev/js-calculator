// Making links between javascript and buttons on the calculator

const displayPlate = document.querySelector('#display');
const backspaceButton = document.querySelector('#back');
const clearButton = document.querySelector('#ac');
const numberButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('#equals');

// Creating variables for numbers and operator

let firstNumber = '';
let operator = '';
let secondNumber = '';
let resNumber = '';

// Adding listeners to number buttons 

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', processNumber)
};

// Adding listeners to operator buttons

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', processOperator)
}

// Function for processing number input

function processNumber(e) {
    const number = Number(e.target.value);
    console.log(number);
}

// Function for processing operator

function processOperator() {

}

// Function to operate

function operate(x, operator, y) {
    switch(operator) {
        case 'add':
            return add(x, y);
            break;
        case 'subtract':
            return subtract(x, y);
            break;
        case 'multiply':
            return multiply(x, y);
            break;
        case 'divide':
            return divide(x, y);
            break;
        default:
            console.log('Something went wrong')
    }
}

// Simple maths functions

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}