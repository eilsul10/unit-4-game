window.onload = function () {
    $("#gem1").click(gem1Clicked);
    $("#gem2").click(gem2Clicked);
    $("#gem3").click(gem3Clicked);
    $("#gem4").click(gem4Clicked);
};

// declare Variable
var gemValue1 = Math.floor((Math.random() * 13) + 1);
var gemValue2 = Math.floor((Math.random() * 13) + 1);
var gemValue3 = Math.floor((Math.random() * 13) + 1);
var gemValue4 = Math.floor((Math.random() * 13) + 1);

// initialize Game
var wins = 0;
var losses = 0;
var totalScore = 0;
var computerGuess = Math.floor((Math.random() * 101) + 19);

document.getElementById("showWins").textContent = wins;
document.getElementById("showLosses").textContent = losses;
document.getElementById("showNumber").textContent = computerGuess;
document.getElementById("totalScore").textContent = totalScore;

function gem1Clicked() {
    totalScore = Number(totalScore) + Number(gemValue1);
    $("#totalScore").text(" " + totalScore);
    if (computerGuess === totalScore) {
        wins++;
        newGame();
        alert("You have won!!");
    }

    else if (totalScore > computerGuess) {
        losses++;
        newGame();
        alert("You have lost. Please try again.");

        document.getElementById("showWins").textContent = wins;
        document.getElementById("showLosses").textContent = losses;
        document.getElementById("totalScore").textContent = totalScore;

    }
};


function gem2Clicked() {
    totalScore = Number(totalScore) + Number(gemValue2);
    $("#totalScore").text(" " + totalScore);

    if (computerGuess === totalScore) {
        wins++;
        newGame();
        alert("You have won!!");
    }

    else if (totalScore > computerGuess) {
        losses++;
        newGame();
        alert("You have lost. Please try again.");

        document.getElementById("showWins").textContent = wins;
        document.getElementById("showLosses").textContent = losses;
        document.getElementById("totalScore").textContent = totalScore;

    }

}

function gem3Clicked() {
    totalScore = Number(totalScore) + Number(gemValue3);
    $("#totalScore").text(" " + totalScore);

    if (computerGuess === totalScore) {
        wins++;
        newGame();
        alert("You have won!!");
    }

    else if (totalScore > computerGuess) {
        losses++;
        newGame();
        alert("You have lost. Please try again.");

        document.getElementById("showWins").textContent = wins;
        document.getElementById("showLosses").textContent = losses;
        document.getElementById("totalScore").textContent = totalScore;

    }
}

function gem4Clicked() {
    totalScore = Number(totalScore) + Number(gemValue4);
    $("#totalScore").text(" " + totalScore);

    if (computerGuess === totalScore) {
        wins++;
        newGame();
        alert("You have won!!");
    }

    else if (totalScore > computerGuess) {
        losses++;
        newGame();
        alert("You have lost. Please try again.");

        document.getElementById("showWins").textContent = wins;
        document.getElementById("showLosses").textContent = losses;
        document.getElementById("totalScore").textContent = totalScore;

    }

}

function newGame() {
    totalScore= 0;
    computerGuess = Math.floor((Math.random() * 101) + 19);
    document.getElementById("showNumber").textContent = computerGuess;
    document.getElementById("showWins").textContent = wins;
    document.getElementById("showLosses").textContent = losses;

}



gem1Clicked();
gem2Clicked();
gem3Clicked();
gem4Clicked();
newGame();