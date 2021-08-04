"use strict";
//declare variables
const display = document.querySelector(".display");
const clearbtn = document.querySelector(".clear");
let expression = "";

//event listener for the clear button sets the value on the calculator to 0
clearbtn.addEventListener("click", function () {
  expression = "";
  display.innerHTML = "0";
});

//function for building expressions
function createE(n) {
  expression += n;
  document.querySelector(".display").innerHTML = expression;
}

//function for calculating the sum
function calc() {
  display.innerHTML = eval(expression);
}
