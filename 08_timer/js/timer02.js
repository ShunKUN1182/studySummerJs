console.log("foo");

const counter = document.getElementById("counter");
let count = 0;
const timer = 2000;

function setTimer() {
    if (count < 30) {
        count++;
        console.log(count);
        counter.innerHTML = `${count}回`;
        setTimeout(setTimer , timer)
    }else{
        return false
    }
}

setTimer();
