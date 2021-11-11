let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollButton = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollButton.addEventListener('click', function() {
    let result = Math.floor(Math.random() * 6) + 1;
    console.log(result);

    if (player1Turn) {
        player1Scoreboard.innerHTML = result;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
    } else {
        player2Scoreboard.innerHTML = result;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
    }
    player1Turn = !player1Turn;
})