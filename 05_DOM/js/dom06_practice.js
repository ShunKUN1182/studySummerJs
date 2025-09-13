const main = document.getElementById("main");
const sub = document.getElementById("sub");
const soup = document.getElementById("soup");
const side = document.getElementById("side");
const btn = document.getElementById("submit");
const text = document.getElementById("menu");

btn.addEventListener("click" , () =>{
    console.log(main.value , sub.value);
    text.innerHTML = "注文内容は" + main.value + "," + sub.value + "," + soup.value + "," + side.value +"です。";
});