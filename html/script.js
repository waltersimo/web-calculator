function clearScreen() {
    document.getElementById("display").value = "";
  }
  
function backspace() {
var display = document.getElementById("display");
display.value = display.value.slice(0, -1);
}

function addToScreen(val) {
    var display = document.getElementById("display");
    if (display.value === "") {
      display.value = val;
    } else {
      display.value += val;
    }
  }
  

// function addToScreen(val) {
//     var currentValue = document.getElementById("display").value;
//     document.getElementById("display").value = currentValue + val;
// }

// function addToScreen(val) {
// document.getElementById("display").value += val;
// }

function calculate() {
var expression = document.getElementById("display").value;

// Check if the expression is a valid mathematical expression
var validExpression = /^[0-9+\-*/().\s]+$/.test(expression);

// Check if the number of operands and operators match
var operands = expression.match(/[0-9.]+/g);
var operators = expression.match(/[+\-*/]/g);
var validOperandsOperators = operands.length === operators.length + 1;

if(validExpression && validOperandsOperators) {
    var result = eval(expression);
    document.getElementById("display").value = result;
} else {
    alert("Invalid expression");
}
}