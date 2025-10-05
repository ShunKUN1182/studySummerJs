const arr = ["HTML","CSS","JavaScript","Pug","Sass","TypeScript"];

const list = document.getElementById("skill");
let count = 0;
const addTime = 3000;

setInterval(()=>{

    if (count < arr.length) {
        // 確認用ログ console.log("foo");
        list.innerHTML += `<li>${arr[count]}</li>`
        count++;
    }else{
        return false;
    }
},addTime);