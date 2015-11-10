var calc = function(){

  var firstNumber = parseInt($("#noone").val());
  var secondNumber = parseInt($("#notwo").val());
  var operator = $("#operator").val();
  var dp = $("#dp").val();

  if(operator == "+"){
    var result = firstNumber + secondNumber;

  }else if(operator == "-"){
    var result = firstNumber - secondNumber;

  }else if(operator == "*"){
    var result = firstNumber * secondNumber;

  }else if(operator == "/"){
    var result = firstNumber / secondNumber;

  }else{
    var result = "Invalid";
};

var final = $("#final");

if($.isNumeric(result) == true){
   resultDisplay = (result.toFixed(dp));
   final.html(resultDisplay);
 }else{
   final.html(result);
 }
}
