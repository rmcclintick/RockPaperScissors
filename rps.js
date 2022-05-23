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
    for (let i = 0; i < 5; i++)
    {
        let userChoice = prompt('Rock, Paper, or Scissors');
        console.log(playRound(userChoice, computerPlay()));
    }
    //display scores and check if player won
    console.log(`Your score: ${userScore} \tComputer's score: ${computerScore}`);
    if (userScore > computerScore) 
        console.log('You Win!');
    else if (userScore == computerScore)
        console.log('Draw');
    else 
        console.log('You Lose!');
}

game();