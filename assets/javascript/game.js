$(document).ready(function() {
    
    // Global Variables

    var userScore = 0;
    var cpuScore = 0;
    var wins = 0;
    var losses = 0;

    // write function that generates a random number. use variables, then replace variables with the min/max value for crystals(1,12)/cpu guess(19, 120).

    var ranNum = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    var crystals = {
        red: {
            name: "red",
            value: 0
        },

        blue: {
            name: "blue",
            value: 0
        },

        yellow: {
            name: "yellow",
            value: 0
        },

        green: {
            name: "green",
            value: 0
        },
    };

    // Start the game or restart if won/loss.

    var start = function() {
        userScore = 0;
        cpuScore = ranNum(19, 120);
        crystals.red.value = ranNum(1, 12);
        crystals.blue.value = ranNum(1, 12);
        crystals.yellow.value = ranNum(1, 12);
        crystals.green.value = ranNum(1, 12);
       
        // send the score values to their home sweet home

        $("#score").text(userScore);
        $("#aiGuess").text(cpuScore);
    }

    start();
    // make function that takes the randomized crystals value and adds them together when clicked. 

    // Tried to make this function but wasn't sure how to make it work correctly. Would display NaN on the page, so place it into each onclick.
        // var crystalValue = function() {
        //     userScore += crystals.value;
        //     $("#score").text(userScore);
        //     check();
            
        // }

    $("#red").on("click", function() {
        userScore += crystals.red.value;
        $("#score").html(userScore);
        check();
        
    })

    $("#blue").on("click", function() {
        userScore += crystals.blue.value;
        $("#score").html(userScore);
        check();
        
    })

    $("#yellow").on("click", function() {
        userScore += crystals.yellow.value;
        $("#score").html(userScore);
        check();
        
    })

    $("#green").on("click", function() {
        userScore += crystals.green.value;
        $("#score").html(userScore);
        check();
        
    })


    // Logic win/lose

    var check = function () {
        if (userScore > cpuScore) {
            $("#win-lose").text("You Lose!");
            losses++;
            $("#losses").text(losses);
            start();
        }

        else if (userScore === cpuScore) {
            $("#win-lose").text("You Win!");
            wins++;
            $("#wins").text(wins);
            start();
        }
    }

})
    