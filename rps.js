let userScore = 0;
let computerScore = 0;

//returns a randomly selected choice from {Rock, Paper, Scissors}
function computerPlay()
{
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0: return 'Rock';
            break;
        case 1: return 'Paper';
            break;
        case 2: return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection)
{
    //draw case
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase())
    {
        return `Draw! You both played ${playerSelection}`;
    }
    //win cases
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase()==='SCISSORS')
    {
        userScore ++;
        return 'You win! Rock beats Scissors!';
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase()==='ROCK')
    {
        userScore ++;
        return 'You win! Paper beats Rock!';
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase()==='PAPER')
    {
        userScore ++;
        return 'You win! Scissors beats Paper!';
    }
    //lose case
    else 
    {
        computerScore ++;
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game()
{
    //game loop. plays 5 rounds
    // for (let i = 0; i < 5; i++)
    // {
    //     let userChoice = prompt('Rock, Paper, or Scissors');
    //     console.log(playRound(userChoice, computerPlay()));
    // }
    //display scores and check if player won
    console.log(`Your score: ${userScore} \tComputer's score: ${computerScore}`);
    if (userScore > computerScore) 
        console.log('You Win!');
    else if (userScore == computerScore)
        console.log('Draw');
    else 
        console.log('You Lose!');
}

// game();

const buttons = document.querySelectorAll('.player-choice');
const output = document.querySelector('.round-output');
const score = document.querySelector('.score');
const endGame = document.querySelector('.end-game');
let gameOver = false;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (!gameOver)
        {
            output.textContent = playRound(e.target.textContent, computerPlay());
            score.textContent = `Your score: ${userScore} \tComputer's score: ${computerScore}`;
        }
        if (gameOver)
        {
            userScore = 0;
            computerScore = 0;
            output.textContent = playRound(e.target.textContent, computerPlay());
            score.textContent = `Your score: ${userScore} \tComputer's score: ${computerScore}`;
            endGame.textContent = '';
            gameOver = false;
        }
        if (userScore == 5)
        {
            gameOver = true;
            endGame.textContent = 'You won 5 rounds! Play again?'
        }
        else if (computerScore == 5)
        {
            gameOver = true;
            endGame.textContent = 'You lost 5 rounds! Play again?'
        }
        
    });
});