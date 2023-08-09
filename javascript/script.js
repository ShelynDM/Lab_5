let input_number1 = document.getElementById("input-field1");
let input_number2 = document.getElementById("input-field2");
let answerButton = document.getElementById("answer");
let sumArea = document.getElementById("sum");


answerButton.addEventListener("click", function() {
    let number1 = parseFloat(input_number1.value);
    let number2 = parseFloat(input_number2.value);

    if (isNaN(number1) || isNaN(number2)) {
        sumArea.textContent = "Please enter a valid numbers.";
    } else {
        const sum = number1 + number2;
        sumArea.textContent = sum;
    }
});

