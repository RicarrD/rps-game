
let losses = 0
let wins = 0
let draws = 0

function playerSelect(choice) {
    let getNumber = Math.random();
    // console.log(getNumber);

    let computerSelection;
    if (getNumber >= 0 && getNumber < 1 / 3) {
        computerSelection = "rock";
    } else if (getNumber >= 1 / 3 && getNumber < 2 / 3) {
        computerSelection = "paper";
    } else if (getNumber >= 2 / 3 && getNumber <= 1) {
        computerSelection = "scissors";
    }

    let resultParagraph = document.getElementById("result");
    let winsSpan = document.getElementById("wins");
    let lossesSpan = document.getElementById("losses");
    let drawsSpan = document.getElementById("draws");
    let winOrNotContainer = document.getElementById("win-or-not");

    switch (choice) {
        case "rock":
            if (computerSelection === "rock") {
                resultParagraph.textContent = "You pick rock and the computer picks rock, It's a Draw!";
                draws++;
            } else if (computerSelection === "paper") {
                resultParagraph.textContent = "You pick rock and the computer picks paper, You Lose!";
                losses++;
            } else {
                resultParagraph.textContent = "You pick rock and the computer picks scissors, You Win!";
                wins++;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                resultParagraph.textContent = "You pick paper and the computer picks rock, You Win!";
                wins++;
            } else if (computerSelection === "paper") {
                resultParagraph.textContent = "You pick paper and the computer picks paper, It's a Draw!";
                draws++;
            } else {
                resultParagraph.textContent = "You pick paper and the computer picks scissors, You Lose!";
                losses++;
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                resultParagraph.textContent = "You pick scissors and the computer picks rock, You Lose!";
                losses++;
            } else if (computerSelection === "paper") {
                resultParagraph.textContent = "You pick scissors and the computer picks paper, You Win!";
                wins++;
            } else {
                resultParagraph.textContent = "You pick scissors and the computer picks scissors, It's a Draw!";
                draws++;
            }
            break;
            default:
                resultParagraph.textContent = "Invalid choice. Please choose rock, paper, or scissors.";
        }

        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = draws;
    
        if (wins === 5) {
            winOrNotContainer.textContent = "You win! Congratulations!";
        resetCounters();
        } else if (losses === 5) {
         winOrNotContainer.textContent = "You lose! Better luck next time!";
        resetCounters();
        } else {
         winOrNotContainer.textContent = ""; // Limpa o texto se ainda não houve 5 vitórias ou derrotas
        }
}
    
    function resetCounters() {
        wins = 0;
        losses = 0;
        draws = 0;
    }
