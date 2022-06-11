const numberContent = document.querySelectorAll("[data-number]");
const contentClear = document.querySelector("[data-clear]");
const operatorContent = document.querySelectorAll("[data-operator]");
const equalsOperator = document.querySelector("[data-equals]");
const previousOperand = document.querySelector(".previous-operand");
const nextOperand = document.querySelector(".next-operand");

let previousNumber = "";
let currentNumber = "";
let operatorChar = ""; // where we'll define the operator

contentClear.addEventListener("click", () => {
  nextOperand.innerHTML = 0;
  previousOperand.innerHTML = "";
  previousNumber = "";
  currentNumber = "";
});

numberContent.forEach((button) => {
  button.addEventListener("click", (e) => {
    numHandler(e.target.textContent);
  });
});

operatorContent.forEach((button) => {
  button.addEventListener("click", (e) => {
    operatorHandler(e.target.textContent);
  });
});

equalsOperator.addEventListener("click", () => {
  if (Number(previousNumber) != 0 && Number(currentNumber) != 0) {
    operate(operatorChar, Number(previousNumber), Number(currentNumber));
  }
});

function operate(operator, previousNumber, currentNumber) {
  let result;
  switch (operator) {
    case "+":
      result = add(previousNumber, currentNumber);
      break;
    case "-":
      result = subtract(previousNumber, currentNumber);
      break;
    case "÷":
      result = divide(previousNumber, currentNumber);
      break;
    case "*":
      result = multiply(previousNumber, currentNumber);
      break;
  }
  nextOperand.innerHTML = result;
  previousOperand.innerHTML = `${previousNumber} ${operator} ${currentNumber}`;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  let result = Number(b) == 0 ? `You can't divide by zero, dummie :)` : a / b;
  return result;
}

function multiply(a, b) {
  return a * b;
}

function numHandler(number) {
  if (currentNumber.length <= 11) {
    currentNumber += number;
    nextOperand.innerHTML = currentNumber;
  }
}

function operatorHandler(operator) {
  previousNumber = currentNumber;
  operatorChar = operator;
  previousOperand.innerHTML = previousNumber + operatorChar;
  currentNumber = "";
  nextOperand.innerHTML = "";
}
