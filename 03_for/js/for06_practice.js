//残金
let wallet = 12800;
//価格
let price = 980;

let sellPrice = 750;



// for(let i = 0; i < 20; i++){
    
//     if (wallet >= price) {
//         wallet -= price
//         console.log("購入しました");
//     }else{
//         console.log("購入できませんでした");
//         console.log(`${i}回購入できました。残り金額は${wallet}円です。`);
//         i = 20;
//     }
// };


for(let i = 0; i < 20; i++){
    if (wallet >= price) {
        if (i < 5) {
            wallet -= price;
            // console.log("通常価格で購入");            
        }else{
            wallet -= sellPrice;
            // console.log("割引価格で購入");
        }
    }else if(wallet >= sellPrice){
        wallet -= sellPrice;
        // console.log("割引価格で購入");
    }else{
        console.log("残高不足です");
        // console.log(`${i}回購入できました、残り金額は${wallet}円です。`);
        break;
    }

    console.log(`${i + 1}回目の買い物終了、残金は${wallet}円です`);

}
    
    // for(let i = 0; wallet < price; i++){
    //     if (wallet >= price) {
    //         wallet = wallet - price
    //         console.log(`${i+1}回目の購入`);
    //         console.log(`残り金額${wallet}円`);
    //     }
    //     console.log(`${i + 1}回購入することができました`);
    //     console.log(`残りの金額は${wallet}円です`);
    // };

// wallet = wallet - price;
// wallet -= price;