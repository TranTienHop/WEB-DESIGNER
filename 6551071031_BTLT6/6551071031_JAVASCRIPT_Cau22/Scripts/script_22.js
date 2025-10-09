function multiply() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = n1 * n2;
}

function divide() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  if (n2 === 0) {
    document.getElementById("result").innerText = "Không thể chia cho 0!";
  } else {
    document.getElementById("result").innerText = n1 / n2;
  }
}