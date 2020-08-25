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


function getPlayerSelection() {
    return prompt("Choose one: boulder, parchment, or shears?");
}


function oneRound(playerSelection, computerSelection) {
    let newSelection = playerSelection.toLowerCase();
    if (newSelection == computerSelection) {
        console.log("It's a draw!");
        return "draw";
    
    } else if (newSelection == "boulder") {
        if (computerSelection == "parchment") {
            console.log("You lose! Parchment covers Boulder!");
            return "loss";
        } else if (computerSelection == "shears") {
            console.log("You win! Boulder crushes Shears!");
            return "win";
        }
    
    } else if (newSelection == "parchment") {
        if (computerSelection == "shears") {
            console.log("You lose! Shears cut Parchment!");
            return "loss";
        } else if (computerSelection == "boulder") {
            console.log("You win! Parchment covers Boulder!");
            return "win";
        }
    
    } else if (newSelection == "shears") {
        if (computerSelection == "boulder") {
            console.log("You lose! Boulder crushes Shears!");
            return "loss";
        } else if (computerSelection == "parchment") {
            console.log("You win! Shears cut Parchment!");
            return "win";
        }
    }
}


function game() {
    
    let score = 0;
    for (let rounds = 5; rounds > 0; rounds--) {
        let result = oneRound(getPlayerSelection(), computerPlay());
        switch (result) {
            case "draw":
                break;
            case "loss":
                score--;
                break;
            case "win":
                score++;
                break;
        }
    }
    
    if (score > 0) {
        return "You win the game!";
    } else if (score < 0) {
        return "You lose the game!";
    } else {
        return "The game is a draw!";
    }
}