const btnL = document.getElementById("btnL");
const btnS = document.getElementById("btnS");
const text = document.getElementById("text");

btnL.addEventListener("click" , () =>{
    text.style.fontSize = "80px"
});

btnS.addEventListener("click" , () =>{
    text.style.fontSize = "20px"
});