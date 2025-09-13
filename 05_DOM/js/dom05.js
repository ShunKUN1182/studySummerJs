const size = document.getElementById("size");
const text = document.getElementById("text");


// size.onchange = () =>{
//     text.innerHTML = `選択したサイズ：${size.value}サイズ`
// };

size.addEventListener("change" , () =>{
    text.innerHTML = `選択したサイズ：${size.value}サイズ`
});