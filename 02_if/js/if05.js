const photoshopScore = Number(prompt("Photoshopの点数は？"));
const illustratorScore = Number(prompt("Illustratorの点数は？"));

const totalScore = photoshopScore + illustratorScore;
const averageScore = totalScore / 2;
console.log(averageScore , totalScore);


if (averageScore >= 0 && averageScore <= 30) {
    console.log("がんばりなさい");
}else if (averageScore > 30 && averageScore <=60) {
    console.log("まずまずね");
}else if (averageScore > 60 && averageScore <= 100) {
    console.log("頑張ったね");
}else{
    console.log("嘘つくんじゃない");
};