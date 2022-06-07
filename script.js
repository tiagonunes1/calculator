function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mult(a, b) {
  return a * b;
}

function operate(operator, a, b) {}

function AC() {
  const calcInput = document.querySelector(".input");
  calcInput.value = " ";
}
function C() {
  const calcInput = document.querySelector(".input");
  calcInput.value = 0;
}
function getValue() {
  let value = this.value;
  console.log(value);
  const calcInput = document.querySelector(".input");
  if (calcInput.value == 0) calcInput.value = "";
  calcInput.value += value;
}

const btn = document.querySelectorAll(".small_btn");
for (i of btn) {
  i.addEventListener("click", getValue);
}

const btnAC = document.querySelectorAll(".btn_ac");
for (i of btnAC) {
  i.addEventListener("click", AC);
}

const btnC = document.querySelectorAll(".btn_ac");
for (i of btnC) {
  i.addEventListener("click", C);
}

const btnOperator = document.querySelectorAll('[class*="operator"]');
for (i of btnOperator) {
  i.addEventListener("click", getValue);
}
