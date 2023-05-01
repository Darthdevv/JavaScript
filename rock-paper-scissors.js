let Score = JSON.parse(localStorage.getItem('Score')) || {
    win: 0,
    loss: 0,
    tie: 0,
};

updateScore();

function computerMoveLogic() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "Scissors";
    }
        return computerMove;
}

function resetScore() {
    Score.loss = 0;
    Score.tie = 0;
    Score.win = 0;
    localStorage.removeItem('Score');
    updateScore();
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    let text = document.querySelector('.autoplay').innerHTML;
    if (text === "AutoPlay") {
        document.querySelector(".autoplay").innerHTML='Stop'
    } else {
        document.querySelector(".autoplay").innerHTML = 'AutoPlay';
    }
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = computerMoveLogic();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove) {
    const computerMove = computerMoveLogic();
    let result = "";
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
    if (result === "Tie") {
        Score.tie += 1;
    } else if (result === "You Lost") {
        Score.loss += 1;
    } else if (result === "You Won") {
        Score.win += 1;
    }
    localStorage.setItem("Score", JSON.stringify(Score));

    document.querySelector('.result').innerHTML = result;

    document.querySelector(".moves").innerHTML = `You
        <img class="move-Icon" src="images/${playerMove}-emoji.png" alt="">
        <img class="move-Icon" src="images/${computerMove}-emoji.png" alt="">
        Computer`;

    updateScore();

}

function updateScore() {
    document.querySelector(
        ".score"
    ).innerHTML = ` Wins: ${Score.win} Losses: ${Score.loss} ties:${Score.tie}`;
}

