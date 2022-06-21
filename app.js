const operation = prompt("Choose an operation: add, minus, multiply, divide or modulus");

const operationToLowercase = operation.toLowerCase();

let number1 = parseInt(prompt("Enter a number:"));

let number2 = parseInt(prompt("Enter another number:"));

function Calculate(Number) {
    if (Number.isInteger(number1) === false || Number.isInteger(number2) === false) {
        alert("Invalid integer value entered");
    } else {
        if (operationToLowercase === "add") {
            alert(number1 + number2);
        } else if (operationToLowercase === "minus") {
            alert(number1 - number2);
        } else if (operationToLowercase === "multiply") {
            alert(number1 * number2);
        } else if (operationToLowercase === "divide") {
            alert(number1 / number2);
        } else if (operationToLowercase === "modulus") {
            alert(number1 % number2);
        } else {
            alert("Wrong math operation entered!");
        }
    }
}

Calculate(Number);