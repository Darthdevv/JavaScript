const randomNumber = Math.random();
let computerMove = '';
let result = ''



function generateRandomNum() {
    return randomNumber;
}

function gameLogic() {
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "Scissors";
    }
        return computerMove;
}

function validateRock() {
    generateRandomNum();
    gameLogic()
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
    alert(`You picked Rock and the Computer picked ${computerMove} so ${result}`)
}

function validatePaper() {
    generateRandomNum();
    gameLogic();
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
    alert(`You picked Paper and the Computer picked ${computerMove} so ${result}`)
}

function validateScissors() {
    generateRandomNum();
    gameLogic();
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
    alert(
        `You picked Scissors and the Computer picked ${computerMove} so ${result}`
    );
}