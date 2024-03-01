function Calculate () {
   const height = parseFloat(document.getElementById('Height').value);
   const weight = parseFloat(document.getElementById('Weight').value);

   let bmi = weight / (height/100)**2;
   bmi = bmi.toFixed(2);

  if (bmi > 0 && bmi <= 18.5) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
    output.style.color ='Gold';
  } else if (bmi > 18.5 && bmi <= 25) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
    output.style.color ='green';
  } else if (bmi > 25 && bmi <= 40) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
    output.style.color ='red';
  } else {
    document.getElementById('output').innerHTML = 'Please type valid numbers.';
  }
}


const isDisabled = () => {
  console.log("isDisabled");
const height = parseFloat(document.getElementById("Height").value);
const weight = parseFloat(document.getElementById("Weight").value);
const clearBtn = document.getElementById("clearBtn");

 clearBtn.classList.add("active");

 
  if (height || weight) {

       clearBtn.disabled = false
 
  } else {
     
      clearBtn.disabled = true;
  }
 
 
};


const clearBtn = document.querySelector('.btn1')
function clear() {

  document.getElementById("Height").value = null;
  document.getElementById("Weight").value = null;
 
  clearBtn.classList.remove('active');
 
}

clearBtn.addEventListener('click', clear);