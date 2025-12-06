const photoShopScore = Number(prompt("photoshop何点なの？"));
const IllustratorScore = Number(prompt("Illustrator何点なの？"));
const totalScore = photoShopScore + IllustratorScore;
const averageScore = totalScore / 2;

if (photoShopScore >= 0 && photoShopScore <= 100) {
    if (IllustratorScore >= 0 && IllustratorScore <= 100) {
        averageScoreCheck();
    } else {
        errorMessage();
    }
} else {
    errorMessage();
}

function errorMessage() {
    alert("1~100の数値を入力して下さい");
}

function averageScoreCheck() {
    if (averageScore >= 61 && averageScore <= 100) {
        console.log("頑張ったね");
    } else if (averageScore >= 31 && averageScore <= 60) {
        console.log("まずまずね");
    } else if (averageScore >= 0 && averageScore <= 30) {
        console.log("がんばりなさい");
    }
}

// 文字列を数値にする方法！！！

Number();
parseFloat();
parseInt();

const text = parseFloat("19387");
const text2 = "10388";
