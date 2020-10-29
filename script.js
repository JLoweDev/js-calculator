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
let saveNumber = '';

// Adding listeners to number buttons 

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', processNumber)
};

// Adding listeners to operator buttons

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function () {
        useOperator();
        if (!firstNumber) {
            return
        } else {
            operator = operatorButtons[i].value;
        }
    })
};

// Function to use operator

function useOperator () {
    if (firstNumber && secondNumber) {
        saveNumber = operate(+firstNumber, operator, +secondNumber);
        if (saveNumber % 1 != 0) {
            saveNumber = saveNumber.toFixed(3);
        }
        displayNumber(saveNumber);
        firstNumber = saveNumber;
        secondNumber = '';
    }
}

// Function for AC button

clearButton.addEventListener('click', function() {
    firstNumber = '';
    secondNumber = '';
    saveNumber = '';
    tot = '';
    operator = '';
    displayPlate.innerHTML = '';
})

// Function for equals sign

equalsButton.addEventListener('click', function() {
    let tot = operate(+firstNumber, operator, +secondNumber);
    if (!secondNumber) {
        return
    }
    if (tot % 1 != 0) {
        tot = tot.toFixed(3);
    }
    displayPlate.innerHTML = tot;
    firstNumber = tot;
    secondNumber = '';
})


// Function for processing number input

function processNumber(e) {
    const number = Number(e.target.value);
    if (firstNumber && operator && secondNumber.length < 13) {
        createNumber(number);
        displayNumber(secondNumber);
      } else if (firstNumber.length < 13) {
        createNumber(number);
        displayNumber(firstNumber);
      }
}

// Function to create numbers

function createNumber(number) {
	if (firstNumber && operator) {
		secondNumber += number;
	} else {
		firstNumber += number;
	}
};

// Function to display number

function displayNumber(intNumber) {
    displayPlate.innerHTML = intNumber;
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