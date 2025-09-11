//残金
let wallet = 12800;
//価格
let price = 980;



for(let i = 0; i < 20; i++){
    
    if (wallet >= price) {
        wallet -= price
        console.log("購入しました");
    }else{
        console.log("購入できませんでした");
        console.log(`${i}回購入できました。残り金額は${wallet}円です。`);
        i = 20;
    }
};
    
    // for(let i = 0; wallet < price; i++){
    //     if (wallet >= price) {
    //         wallet = wallet - price
    //         console.log(`${i+1}回目の購入`);
    //         console.log(`残り金額${wallet}円`);
    //     }
    //     console.log(`${i + 1}回購入することができました`);
    //     console.log(`残りの金額は${wallet}円です`);
    // };