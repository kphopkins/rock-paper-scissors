let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('#results');
const para = document.createElement('p');
const winner = document.createElement('p');
const score = document.createElement('p');

const game = document.querySelector('#game');
game.style.display = "none";

const playButton = document.querySelector('#play');
playButton.textContent = "Click to play!";
playButton.addEventListener('click', playGame);

const buttons = document.querySelectorAll(".playerSelection");
buttons.forEach(button => button.addEventListener('click', playRound));


function computerPlay() {
    let choice = Math.floor((Math.random() * 3) + 1);
    switch (choice) {
        case 1:
           return "boulder";
           break; 
        case 2:
            return "parchment";
            break;
        case 3:
            return "shears";
            break;
    }
}

function playRound(button) {
    let playerSelection = button.target.id;
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        para.textContent = "It's a draw!";
    } else if (playerSelection == "boulder") {
        if (computerSelection == "parchment") {
            para.textContent = "You lose! Parchment covers Boulder!";
            computerScore++;
        } else if (computerSelection == "shears") {
            para.textContent = "You win! Boulder crushes Shears!";
            playerScore++;
        }
    
    } else if (playerSelection == "parchment") {
        if (computerSelection == "shears") {
            para.textContent = "You lose! Shears cut Parchment!";
            computerScore++;
        } else if (computerSelection == "boulder") {
            para.textContent = "You win! Parchment covers Boulder!";
            playerScore++;
        }
    
    } else if (playerSelection == "shears") {
        if (computerSelection == "boulder") {
            para.textContent = "You lose! Boulder crushes Shears!";
            computerScore++;
        } else if (computerSelection == "parchment") {
            para.textContent = "You win! Shears cut Parchment!";
            playerScore++;
        }
    }

    game.appendChild(para);

    score.textContent = `The score is: Player: ${playerScore}, Computer: ${computerScore}.`
    game.appendChild(score);

    getResult();
}

function getResult(score) {
    if (playerScore == 5 || computerScore == 5) {
        game.style.display = "none";
        if (playerScore == 5) {
            winner.textContent = "Congratulations! You won the game!";
        } else if (computerScore == 5) {
            winner.textContent = "Better luck next time! The computer won the game.";
        }

        play.style.display = "block";
        play.textContent = "Play again?";
    }

    results.appendChild(winner);
}

function playGame() {
    playButton.style.display = "none";
    game.style.display = "block";
    winner.textContent = "";
    para.textContent = "";
    score.textContent = "";
    computerScore = 0;
    playerScore = 0;
}