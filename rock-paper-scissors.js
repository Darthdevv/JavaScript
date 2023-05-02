let Score = JSON.parse(localStorage.getItem('Score')) || {
    win: 0,
    loss: 0,
    tie: 0,
};

const updateScore = () => {
    document.querySelector(
        ".score"
    ).innerHTML = ` Wins: ${Score.win} Losses: ${Score.loss} ties:${Score.tie}`;
};

updateScore();

const computerMoveLogic = () => {
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

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    resetScore();
})

const resetScore = () => {
    Score.loss = 0;
    Score.tie = 0;
    Score.win = 0;
    localStorage.removeItem('Score');
    updateScore();
}

let isAutoPlaying = false;
let intervalId;
const autoplayBtn = document.querySelector('.autoplay');
autoplayBtn.addEventListener('click', () => {
    autoPlay();
})

const autoPlay = () => {
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

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
rockBtn.addEventListener('click', () => {
    playGame('Rock');
})
paperBtn.addEventListener('click', () => {
    playGame('Paper');
})
scissorsBtn.addEventListener('click', () => {
    playGame('Scissors');
})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "r") {
        playGame("Rock");
    } else if (event.key === "p") {
        playGame("Paper");
    } else if (event.key === "s") {
        playGame("Scissors");
    }
});


const playGame = playerMove => {
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

