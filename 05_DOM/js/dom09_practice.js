const btnS = document.getElementById("btn-small");
const btnL = document.getElementById("btn-large");
const text = document.getElementById("wrap");

let fontSize = parseInt(text.style.fontSize);

console.log(fontSize);

btnS.addEventListener("click" , () =>{
    fontSize -= 2;
    text.style.fontSize = fontSize + "px";
    console.log(fontSize);
});

btnL.addEventListener("click" , () =>{
    fontSize += 2;
    text.style.fontSize = fontSize + "px";
    console.log(fontSize);
});



