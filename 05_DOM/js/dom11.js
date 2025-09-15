const btns = document.getElementsByClassName("changeBtn");

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click" , () =>{
        document.body.style.backgroundColor = btns[i].innerHTML
        console.log("foo");
    })
}

// console.log(btns);
