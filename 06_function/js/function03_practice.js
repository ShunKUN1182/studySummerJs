const msg = document.getElementById("text");
const btn = document.getElementById("btn");
const out = document.getElementById("out");

function message(val){
    out.innerHTML = `あなたの入力した文字は${val}です。`;
}

btn.onclick = () => {
    message(msg.value);
}