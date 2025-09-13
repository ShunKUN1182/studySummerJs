const text = document.getElementById("text");
const form = document.getElementById("school");
const btn = document.getElementById("btn");

btn.addEventListener("click" , () =>{
    text.innerHTML = form.value;
});