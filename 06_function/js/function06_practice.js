// const btnA = document.getElementById("btnA");
// const btnB = document.getElementById("btnB");
// const btnC = document.getElementById("btnC");


const btns = document.querySelectorAll("button");
const result = document.getElementById("result");

function btnEvent(btnName){
  result.innerHTML = `${btnName}が押された`;
}

for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener("click" , () =>{
    btnEvent(btns[i].id)
  })
}



// console.log(btns[1]);


// btnA.onclick = () => {
//   btnEvent("A");
// }

// btnB.onclick = () => {
//   btnEvent("B");
// }

// btnC.onclick = () => {
//   btnEvent("C");
// }

