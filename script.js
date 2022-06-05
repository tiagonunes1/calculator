function add(a, b) {}

function sub(a, b) {}

function div(a, b) {}

function mult(a, b) {}

function operate(a,b){
     
}

function AC() {
  const calcInput = document.querySelector(".input");
  calcInput.innerHTML = " ";
}
function C() {
  const calcInput = document.querySelector(".input");
  calcInput.innerHTML = 0;
}
function getValue() {
  let value = this.value;
  console.log(value);
  const calcInput = document.querySelector(".input");
  if (calcInput.innerHTML == 0) calcInput.innerHTML = "";
  calcInput.innerHTML += value;
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
