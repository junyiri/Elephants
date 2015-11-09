function calculateBMI(){

  //PART 1 AND 1A: Calculate BMI
  /*var weight = prompt("Can I have your WEIGHT in kg, please");
  var height = prompt("Can I have your HEIGHT in m, please");*/

  //PART 1B: Using input boxes
  var weightField = document.getElementById("weightField");
  var heightField = document.getElementById("heightField");
  var weight = weightField.value;
  var height = heightField.value;

  var bmi = weight / (height * height);
  var bmidisplay = bmi.toFixed(2);

//PART 2: Indicate BMI and health status
  /*if (bmi <= 18.5) {
    alert("Your bmi is " + bmi + "\nYou are underweight plz eat more")
  } else if (bmi <= 25) {
    alert("Your bmi is " + bmi + "\nVery good plz dont get hit by a car")
  } else if (bmi <= 30) {
    alert("Your bmi is " + bmi + "\nYou are overweight plz exercise more")
  } else if (bmi > 30){
    alert("Your bmi is " + bmi + "\nYou are obese plz see a doctor i cant help you")
  }
};*/

//PART 2A AND @B: Indicate BMI and health status on HTML
  var r = document.getElementById("result");
  var c = document.getElementById("category");

  if (bmi <= 18.5) {
    r.innerHTML = "Your bmi is " + bmidisplay
    c.innerHTML = "You are underweight plz eat more"
  } else if (bmi <= 18.5) {
    r.innerHTML = "Your bmi is " + bmidisplay
    c.innerHTML = "Very good plz dont get hit by a car"
  } else if (bmi <= 30) {
    r.innerHTML = "Your bmi is " + bmidisplay
    c.innerHTML = "You are overweight plz exercise more"
  } else if (bmi > 30){
    r.innerHTML = "Your bmi is " + bmidisplay
    c.innerHTML = "You are obese plz see a doctor i cant help you"
  }
};

//calculateBMI();
