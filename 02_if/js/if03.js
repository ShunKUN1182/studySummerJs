console.log("foo");

const wallet = 3000;
let item = prompt("欲しいものの値段は？");

if (item === 3000) {
    console.log("ぴったりですよ");
}else if (item < 3000) {
    console.log("買えますよ");
}else{
    console.log("買えません");
    
}