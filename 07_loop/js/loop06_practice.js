const result = document.getElementById("total");
const addName = document.getElementById("addName");
const addPrice = document.getElementById("addPrice");
const btn = document.getElementById("btn");
const addTable = document.querySelector("tbody");
let fruitBoxs = [];

console.log(addTable);


function calculation() {

    const fruitsPrice = document.querySelectorAll(".price");
    
    fruitsPrice.forEach((e , i) => {
        fruitBoxs[i] = parseInt(e.textContent);
        console.log(fruitBoxs);
    });
    
    const totalPrice = fruitBoxs.reduce((a,b) => a + b);
    
    console.log(totalPrice);
    
    result.textContent = "";
    result.insertAdjacentText("beforeend" , totalPrice + "円");
    
}    

calculation();

btn.addEventListener("click" , () =>{
    addTable.insertAdjacentHTML("beforeend" , `<tr><td class="class">${addName.value}</td><td class="price">${addPrice.value}</td></tr>`)
    calculation();
})




