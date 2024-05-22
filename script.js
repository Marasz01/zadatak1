function calculate() {
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;
  const resultBox = document.getElementById("result");

  if (num1 === "" || num2 === "") {
    resultBox.value = "Molimo unesite oba broja!";
    resultBox.style.backgroundColor = "red";
  } else {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const result = number1 >= number2 ? number1 : number2;
    resultBox.value = result;
    resultBox.style.backgroundColor = "green";
  }
}
function randomNumbers() {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);

  document.getElementById("number1").value = randomNum1;
  document.getElementById("number2").value = randomNum2;

  calculate();
}
