function add(a, b) {

}

function sub(a, b) {

}

function div(a, b) {

}

function mult(a, b) {
    
}

function getValue(){
    const calcInput = document.querySelector(".input");
    calcInput.innerHTML = this.value
}


const btn = document.querySelectorAll(".small_btn");
for (i of btn) {
  i.addEventListener("click", getValue);
}