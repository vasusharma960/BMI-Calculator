function changeUnit(){
  var h,w;
  var unit = document.getElementById("unit").value;
  if(unit === "Metric"){
    h = "in meters";
    w = "in kgs";
  }

  if(unit === "Imperial"){
    h = "in inches";
    w = "in pounds";
  }

  document.getElementById("weight").setAttribute("placeholder", "Weight(" + w + ")");
  document.getElementById("height").setAttribute("placeholder", "Height(" + h + ")");
}

function compute(){
  var unit = document.getElementById("unit").value;

  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  if(height < 0 || weight < 0)
  alert("Please enter correct values.")

  if(height > 0 && weight > 0){
    if(unit == "Imperial"){
      weight /= 2.20462;
      height /= 39.3701;
    }

    var bmi = weight / (height * height);

    var message;

    if(bmi < 18.5){
      message = "Underweight";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
      message = "Healthy";
    }
    else if(bmi >= 25 && bmi <= 29.9){
      message = "Overweight";
    }
    else if(bmi >= 30){
      message = "Obese";
    }

    document.getElementById("hidden").style.opacity = "1";
    document.getElementById("result").innerText = parseFloat(bmi).toFixed(2) + ": " + message;
  }

}
