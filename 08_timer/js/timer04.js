const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const outNum = document.getElementById("out");

let timerId;
let num = 0;

startBtn.addEventListener("click" , () =>{
    if (!timerId) {
        timerId = setInterval(()=>{
            num++;
            outNum.innerText = num;
        }, 1000)
    }
});

stopBtn.addEventListener("click" , () =>{
    clearInterval(timerId);
    timerId = null;
    outNum.innerText = num;
});

resetBtn.addEventListener("click" , () =>{
    clearTimeout(timerId);
    timerId = null;
    num = 0;
    outNum.innerText = num;
});