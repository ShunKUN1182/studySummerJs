const size = document.getElementById("size");
const btn = document.getElementById("btn");
const orderList = document.getElementById("orderlist");
const item_name = document.getElementById("item_name");

btn.addEventListener("click" , () =>{
    // orderList.innerHTML += `<li>${size.value}サイズ：${item_name.value}</li>`
    orderList.innerHTML += "<li>" + size.value + "サイズ：" + item_name.value + "</li>"
})