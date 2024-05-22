function calculate() {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  let resultBox = document.getElementById("result");

  if (num1 === "" || num2 === "") {
    resultBox.value = "Molim unesite oba broja!";
    resultBox.style.backgroundColor = "red";
  } else {
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);

    let result = number1 >= number2 ? number1 : number2;
    resultBox.value = result;
    resultBox.style.backgroundColor = "green";
  }
}
function randomNumbers() {
  let randomNum1 = Math.floor(Math.random() * 100);
  let randomNum2 = Math.floor(Math.random() * 100);

  document.getElementById("number1").value = randomNum1;
  document.getElementById("number2").value = randomNum2;

  calculate();
}
