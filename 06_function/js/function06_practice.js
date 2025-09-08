const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const btnC = document.getElementById("btnC");
const result = document.getElementById("result");

btnA.onclick = () => {
  result.innerText = "btnAが押された";
}

btnB.onclick = () => {
  result.innerText = "btnBが押された";
}

btnC.onclick = () => {
  result.innerText = "btnCが押された";
}