//残金
let wallet = 12800;
//価格
let price = 980;

let sallPrice = 750;

let shopNum = 0;


// while(wallet > 980){
//     wallet -= price;
//     console.log("購入");
// };
// console.log(`残り金額は${wallet}です`);

while (shopNum < 20) {
    console.log(shopNum);
    shopNum++;
    if (wallet > price) {
        if (shopNum < 5) {
            wallet -= price ;
        }else if(shopNum >= 5){
            wallet -= sallPrice;
        }
    }else if (wallet > sallPrice) {
        if (shopNum < 5) {
            wallet -= price
        }else if (shopNum >= 5) {
            wallet -= sallPrice;
        }
    }else{
        console.log(`お買い物は${shopNum}回できました、残り金額は${wallet}です`);
        shopNum = 20;
    }

    shopNum++;
}