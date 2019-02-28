console.log("connected");
$(document).ready(function(newGame){

    // variables for the game
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var randomNumber = 0;
        // crystals
    var red = 0;
    var blue = 0;
    var green = 0;
    var yellow = 0;

    // generate random number from 19 to 120 and add to HTML
    var randomNumber = Math.floor((Math.random()* 100) + 19);
    console.log(randomNumber);
    $("#magicNumber").html("Random Number: " + randomNumber);


    // assign random value to each crystal from 1 to 12
    var red = Math.floor(Math.random()* 12) + 1;
    var blue = Math.floor(Math.random()* 12) + 1;
    var green = Math.floor(Math.random()* 12) + 1;
    var yellow = Math.floor(Math.random()* 12) + 1;
    console.log(red, blue, green, yellow);
    

    // when a crystal is clicked, add that crystals value to total score
    $("#red").click (function() {
        totalScore = totalScore + red;
        console.log(totalScore);
        $("#score").html("Your total score is: " + totalScore);
            if (totalScore === randomNumber) {
            winner();
            reset();
            }
            else if (totalScore > randomNumber) {
            loser();
            reset();
            } 
    });
    
    $("#blue").click (function() {
        totalScore = totalScore + blue;
        console.log(totalScore);
        $("#score").html("Your total score is: " + totalScore);
            if (totalScore === randomNumber) {
            winner();
            reset();
            }
            else if (totalScore > randomNumber) {
            loser();
            reset();
            } 
    });

    $("#green").click (function() {
        totalScore = totalScore + green;
        console.log(totalScore);
        $("#score").html("Your total score is: " + totalScore);
            if (totalScore === randomNumber) {
            winner();
            reset();
            }
            else if (totalScore > randomNumber) {
            loser();
            reset();
            } 
    });

    $("#yellow").click (function() {
        totalScore = totalScore + yellow;
        console.log(totalScore);
        $("#score").html("Your total score is: " + totalScore);
            if (totalScore === randomNumber) {
            winner();
            reset();
            }
            else if (totalScore > randomNumber) {
            loser();
            reset();
            } 
    });


    // check total score after each click and match against randomNumber to determine if player is winning or loosing

    function winner() {
        (totalScore === randomNumber) 
        wins = wins + 1;
        $("#totalWins").html("Wins: " + wins);  
        $("#score").html("Your total score is: 0");
    }

    function loser() {
        losses = losses + 1;
        $("#totalLosses").html("Losses: " + losses);
        $("#score").html("Your total score is: 0");
    }

    function reset() {
        randomNumber = Math.floor((Math.random()* 100) + 19);
        $("#magicNumber").html("Random Number: " + randomNumber);
        console.log(randomNumber)
        red = Math.floor(Math.random()* 12) + 1;
        blue = Math.floor(Math.random()* 12) + 1;
        green = Math.floor(Math.random()* 12) + 1;
        yellow = Math.floor(Math.random()* 12) + 1;
        console.log(red, blue, green, yellow);
        totalScore = 0;
        $('#totalScore').html(0);
    };

    $("#reset").click (function () {
        $("#totalWins").html("Wins: 0");
        $("#totalLosses").html("Losses: 0");
        $("#score").html("Your total score is: 0");
        randomNumber = Math.floor((Math.random()* 100) + 19);
        $("#magicNumber").html("Random Number: " + randomNumber);
    });
});