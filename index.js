let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollButton = document.getElementById("rollBtn");
const resetButton = document.getElementById("resetBtn");

rollButton.addEventListener('click', function() {
    let result = Math.floor(Math.random() * 6) + 1;
    console.log(result);

    if (player1Turn) {
        player1Dice.textContent = result;
        player1Score += result;
        player1Scoreboard.textContent = player1Score;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 turn";
    } else {
        player2Dice.textContent = result;
        player2Score += result;
        player2Scoreboard.textContent = player2Score;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 turn";
    }

    if (player1Score >= 20) {
        message.textContent = "Player 1 has won 🥳";
        rollButton.style.display = "none";
        resetButton.style.display = "block";
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won 🥳";
        rollButton.style.display = "none";
        resetButton.style.display = "block";
    }

    player1Turn = !player1Turn;
})