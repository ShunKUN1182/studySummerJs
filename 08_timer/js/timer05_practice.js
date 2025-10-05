const photos = document.querySelectorAll("#photo>li");
console.log(photos);
let count = 0;

setInterval(()=>{

    console.log(count);
    
    if (count < 2) {
        count++;
    }else{
        count = 0;
    }


},2000);

console.log(photos[0].style.zIndex);
