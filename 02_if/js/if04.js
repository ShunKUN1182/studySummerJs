let time = prompt("時間を入れてね");



if (0 > time || 24 < time) {
    console.log("そんな時間はありません");
}else if(0 <= time && 6 >= time){
    console.log("おやすみなさい");
}else if (7 <= time && 11 >= time) {
    console.log("おはようございます");
}else if (12 == time) {
    console.log("お昼ご飯");
}else if (13 <= time && 17 >= time) {
    console.log("こんにちは");
}else if (18 <= time && 24 >= time) {
    console.log("こんばんは");
}else{
    console.log("数字入れてね");
};