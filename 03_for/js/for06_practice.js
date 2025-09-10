//残金
let wallet = 12800;
//価格
let price = 980;

// for(let i = 0; i < 1;){
//     if (wallet >= 980) {
//         wallet - 980
//         console.log("鶏肉購入");
//     }else{
//         i + 1
//     }
// };

for(let i = 0; wallet < price; i++){
    if (wallet >= price) {
        wallet -= price
    }else{
        console.log(`${i + 1}回購入することができました`);
        console.log(`残りの金額は${wallet}円です`);
    }
};