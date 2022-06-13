const numberContent = document.querySelectorAll("[data-number]");
const contentClear = document.querySelector("[data-clear]");
const operatorContent = document.querySelectorAll("[data-operator]");
const equalsOperator = document.querySelector("[data-equals]");
const previousOperand = document.querySelector(".previous-operand");
const nextOperand = document.querySelector(".next-operand");
const dataDelete = document.querySelector("[data-delete]");

let previousNumber = "";
let currentNumber = "";
let operatorChar = "";

window.addEventListener("keydown", keyPressHandler);

dataDelete.addEventListener("click", () => {
  deleteHandler();
});

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
      result = previousNumber + currentNumber;
      break;
    case "-":
      result = previousNumber - currentNumber;
      break;
    case "/":
      result =
        currentNumber == 0
          ? `You can't divide by zero :)`
          : previousNumber / currentNumber;
      break;
    case "*":
      result = previousNumber * currentNumber;
      break;
  }
  if (result <= 0) {
    previousNumber = "error";
    return;
  }
  nextOperand.innerHTML = result;
  previousOperand.innerHTML = `${previousNumber} ${operator} ${currentNumber}`;
}

function numHandler(number) {
  if (previousNumber !== "" && currentNumber !== "" && operatorChar !== "") {
    previousNumber = "";
    nextOperand.innerHTML = currentNumber;
  }
  if (currentNumber.length <= 11) {
    currentNumber += number;
    nextOperand.innerHTML = currentNumber;
  }
}

function operatorHandler(operator) {
  if (previousNumber === "") {
    previousNumber = currentNumber;
    operatorHandlerCheck(operator);
  } else if (currentNumber === "") {
    operatorHandlerCheck(operator);
  } else {
    operate(operatorChar, Number(previousNumber), Number(currentNumber));
    operatorChar = operator;
    nextOperand.innerHTML = "0";
    previousOperand.innerHTML = previousNumber + " " + operatorChar;
  }
}

function operatorHandlerCheck(value) {
  operatorChar = value;
  previousOperand.innerHTML = previousNumber + " " + operatorChar;
  nextOperand.innerHTML = "0";
  currentNumber = "";
}

function deleteHandler() {
  if (currentNumber !== "") {
    currentNumber = currentNumber.slice(0, -1);
    nextOperand.innerHTML = currentNumber;
    if (currentNumber === "") {
      nextOperand.innerHTML = "0";
    }
  }
  if (currentNumber === "" && previousNumber !== "" && operator === "") {
    previousNumber = previousNumber.slice(0, -1);
    nextOperand.innerHTML = previousNumber;
  }
}

function keyPressHandler(e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    numHandler(e.key);
  }
  if (
    e.key === "Enter" ||
    (e.key === "=" && currentNum != "" && previousNum != "")
  ) {
    operate(operatorChar, Number(previousNumber), Number(currentNumber));
  }
  if (e.key === "+" || e.key === "-" || e.key === "/") {
    operatorHandler(e.key);
  }
  if (e.key === "*") {
    operatorHandler("*");
  }
  if (e.key === "Backspace") {
    deleteHandler();
  }
}
