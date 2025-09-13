// 画面を更新する度に0-5までのランダムな値が入る
// let no = Math.floor(Math.random()*6);

let omikuji = [];

omikuji = ["大吉" , "中吉", "小吉" , "吉" , "凶" ,"大凶"];

function juurenKuji(){
    let no = Math.floor(Math.random()*6);

    if (omikuji[no] == "大吉") {
        console.log(`${omikuji[no]}ですおめでとう！！`);
    }else if (omikuji[no] == "中吉") {
        console.log(`${omikuji[no]}ですラッキー！`);
    }else if (omikuji[no] == "小吉") {
        console.log(`${omikuji[no]}です、なんとも言えないね。`);
    }else if (omikuji[no] == "吉") {
        console.log(`コメントに困る${omikuji[no]}です`);
    }else if (omikuji[no] == "凶") {
        console.log(`${omikuji[no]}です、あんらっきーだね`);
    }else if (omikuji[no] == "大凶") {
        console.log(`${omikuji[no]}です残念でえす`);
    }else{
        console.log("無効な値です");
    };
}


for(let i = 0; i < 10; i++){
    juurenKuji();
}