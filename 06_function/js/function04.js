const num = document.getElementById("num");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

function setpx(pxDate){
    input.innerHTML = pxDate;
    result.innerHTML = `${pxDate}px`
}

btn.addEventListener("click" , () =>{
    setpx(num.value);
})