window.onload = function() {

    //  Click events are done for us:
    // $("#gem1").click(gemValue1); review within parentheses
    $("#gem2").click(gemValue2);
    $("#gem3").click(gemValue3);
    $("#gem4").click(gemValue4);
  };


// declare Variable
var randomNumber="";
var totalScore="";
var gemValue1="";
var gemValue2="";
var gemValue3="";
var gemValue4="";

// initialize Game
var wins=0;
var losses=0;
var computerGuess = gemValue1[Math.floor(Math.random() * gemValue1.length)];
var computerGuess = gemValue2[Math.floor(Math.random() * gemValue2.length)];
var computerGuess = gemValue3[Math.floor(Math.random() * gemValue3.length)];
var computerGuess = gemValue4[Math.floor(Math.random() * gemValue4.length)];
var computerGuess = randomNumber[Math.floor(Math.random() * randomNumber.length)];

document.getElementById("showWins").textContent = wins;
document.getElementById("showLosses").textContent = losses;
document.getElementById("showNumber").textContent = randomNumber;

// new Game function

function newGame() {

}

// onkeyUp