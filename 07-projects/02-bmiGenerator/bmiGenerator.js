

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    if (height === "" || height<0 ||isNaN(height) || weight === "" || weight<0 ||isNaN(weight)) {
        result.innerText = "Please enter valid values";
        return;
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let classification;
    if (bmi < 18.6) {
        classification = "Underweight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
        classification = "Normal";
    } else if (bmi >= 24.9 && bmi < 29.9) {
        classification = "Overweight";
    } else {
        classification = "Obese";
    }
    result.innerText = `${bmi} - ${classification}`;
})

