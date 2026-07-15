const tempInput = document.getElementById("temperature");
const convertBtn = document.getElementById("convertBtn");
const cToF = document.getElementById("cToF");
const fToC = document.getElementById("fToC");
const result = document.getElementById("result");

convertBtn.addEventListener("click", function () {

    let temp = parseFloat(tempInput.value);

    if (isNaN(temp)) {
        result.innerHTML = "Error: Please enter a valid number.";
        return;
    }

    let answer;

    if (cToF.checked) {
        answer = temp * 9 / 5 + 32;
        result.innerHTML = temp + "°C = " + answer.toFixed(2) + "°F";
    }
    else {
        answer = (temp - 32) * 5 / 9;
        result.innerHTML = temp + "°F = " + answer.toFixed(2) + "°C";
    }

});