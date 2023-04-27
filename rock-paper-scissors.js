const randomNumber = Math.random();
let computerMove = '';
let result = ''
let Score = JSON.parse(localStorage.getItem('Score')) || {
    win: 0,
    loss: 0,
    tie: 0,
};

function generateRandomNum() {
    return randomNumber;
}

function computerMoveLogic() {
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "Scissors";
    }
        return computerMove;
}

function keepScore() {
    if (result==='Tie') {
        Score.tie += 1;
    } else if (result==='You Lost') {
        Score.loss += 1;
    } else if (result==='You Won') {
        Score.win += 1;
    }
}



function resetScore() {
    Score.loss = 0;
    Score.tie = 0;
    Score.win = 0;
    localStorage.removeItem('Score');
}

function playGame(playerMove) {
    generateRandomNum();
    computerMoveLogic();
    if (playerMove==='Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
            console.log(result)
        } else if (computerMove === 'Paper') {
            result = "You Lost";
            console.log(result);
        } else if (computerMove === 'Scissors') {
            result = "You Won";
            console.log(result);
        }
    } else if (playerMove==='Paper') {
        if (computerMove === 'Rock') {
            result = 'You Won';
            console.log(result)
        } else if (computerMove === 'Paper') {
            result = "Tie";
            console.log(result);
        } else if (computerMove === 'Scissors') {
            result = "You Lost";
            console.log(result);
        }
    } else if (playerMove==='Scissors') {
        if (computerMove === "Rock") {
            result = "You Lost";
            console.log(result);
        } else if (computerMove === "Paper") {
            result = "You Won";
            console.log(result);
        } else if (computerMove === "Scissors") {
            result = "Tie";
            console.log(result);
        }
    }
    keepScore();
    localStorage.setItem("Score", JSON.stringify(Score));
    alert(
        `You picked ${playerMove} and the Computer picked ${computerMove} so ${result}
        Wins: ${Score.win} Losses: ${Score.loss} ties:${Score.tie}`
    );
}

