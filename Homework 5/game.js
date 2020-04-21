
    var getUserChoice, getComputerChoice;

    getUserChoice = getComputerChoice = function () {
    var possibilities = [`"Rock"`, `"Paper"`, `"Scissors"`];
    var randomNumber = Math.floor(Math.random() * 3);
    return possibilities[randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return `It\'s a draw!`;
    } else if (userChoice === `"Rock"`) {
        if (computerChoice === `"Paper"`) {
            return `Computer wins!`;
        } else {
            return `User wins!`;
        }
    } else if (userChoice === `"Paper"`) {
        if (computerChoice === `"Scissors"`) {
            return `Computer wins!`;
        } else {
            return `User wins!`;
        }
    } else if (userChoice === `"Scissors"`) {
        if (computerChoice === `"Rock"`) {
            return `Computer wins!`;
        } else {
            return `User wins!`;
        }
    }
};

function play() {
    var userChoice = getUserChoice();
    var computerChoice = getComputerChoice()
    console.log(`User choice: ` + userChoice);
    console.log(`Computer choice: ` + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

play();