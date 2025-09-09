let num = prompt("1~50の数字を入力してください");

if (num >= 1 && num <= 50) {
    for(let i = 0; i < num; i++){
        console.log(`${i + 1}回目`);
    }
}else{
    console.log("1~50の数字を入れてね");
};