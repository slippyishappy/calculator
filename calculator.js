let calc = document.querySelector('#calc');
let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.operation');
let clear = document.querySelector('#clear');
let display = document.querySelector('#text');

let keeper = '';
let numFirst;
let operator;
let numSecond = 2;

let addition = document.querySelector('#addition');
let subtraction = document.querySelector('#subtract');
let multiplication = document.querySelector('#multiply');
let division = document.querySelector('#divide');

numbers.forEach(number => {
    number.addEventListener('click', (event) => {
        display.textContent += event.target.innerText;
        keeper += event.target.innerText;
        console.log(keeper);
    });
});

operators.forEach(operatorHere => {
    operatorHere.addEventListener("click", (event) => {
        numFirst = keeper;
        operator = event.target.innerText;
        keeper = '';
        display.textContent += ` ${operator} `;
    });
});

calc.addEventListener("click", () => {
    let result;
    numSecond = keeper;
    keeper = '';

    result = operate(numFirst, operator, numSecond);
    display.textContent += ` = ${result}`;
});

function operate(num1, operator, num2) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);

    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
    }
}

function add(...nums) {
    let sum = 0;
    for (let num of nums) sum += num;
    return sum;
}
function subtract(a, b) {
    return a-b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}

clear.addEventListener("click", () => {
    keeper = '';
    numFirst = '';
    numSecond = '';
    display.innerHTML = '';

});