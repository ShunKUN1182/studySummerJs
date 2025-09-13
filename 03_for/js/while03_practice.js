//残金
let wallet = 12800;
//価格
let price = 980;


while(wallet > 980){
    wallet -= price;
    console.log("購入");
};
console.log(`残り金額は${wallet}です`);