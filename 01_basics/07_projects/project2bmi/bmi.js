const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
    return;
  }

  if (weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
//   results.innerHTML = `Your BMI is ${bmi}`;



   let category = '';
  if (bmi < 18.6) {
    category = "Underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = "Normal weight";
  } else {
    category = "Overweight";
  }

  // Show result with category
  results.innerHTML = `Your BMI is <strong>${bmi}</strong><br>Category: <strong>${category}</strong>`;
});
