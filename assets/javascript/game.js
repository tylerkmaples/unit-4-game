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













})
    