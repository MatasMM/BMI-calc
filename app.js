function main () {
   const height = parseFloat(document.getElementById('Height').value);
   const weight = parseFloat(document.getElementById('Weight').value);

   let bmi = weight / (height/100)**2;
   bmi = bmi.toFixed(2);

  if (bmi > 0 && bmi <= 18.5) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Underweight</span>.';
  } else if (bmi > 18.5 && bmi <= 25) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Normal (healthy weight)</span>.';
  } else if (bmi > 25 && bmi <= 40) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Overweight</span>.';
  } else {
    document.getElementById('output').innerHTML = 'Please type valid numbers.';
  }
}