function intialize()
{
  document.getElementById("txtNum1").value = "0";
  document.getElementById("txtNum2").value = "0";
}

function sum()
{
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var sum = num1 + num2;
  alert(`SUM: ${sum}`);
}

function difference()
{
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var diff = num1 - num2;
  alert(`DIFFERENCE: ${diff}`);
}

function product()
{
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var prod = num1 * num2;
  alert(`PRODUCT: ${prod}`);
}

function quotient()
{
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var div = num1 / num2;
  alert(`QUOTIENT: ${div}`);
}

const button = document.getElementById("btnClear");

button.addEventListener("click", function() 
{
  document.getElementById("txtNum1").value = "";
  document.getElementById("txtNum2").value = "";
});