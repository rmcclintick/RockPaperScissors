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
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase()==='Scissors')
    {
        return 'You win! Rock beats Scissors!';
    }
    else if (playerSelection.toUpperCase() === 'Paper' && computerSelection.toUpperCase()==='Rock')
    {
        return 'You win! Paper beats Rock!';
    }
    else if (playerSelection.toUpperCase() === 'Scissors' && ccomputerSelection.toUpperCase()==='Paper')
    {
        return 'You win! Scissors beats Paper!';
    }
    //lose case
    else 
    {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

//test cases
console.log(playRound('Rock', 'Paper'));
console.log(playRound('Paper', 'Paper'));
console.log(playRound('scissors', 'Paper'));
console.log(playRound('paper', 'Scissors'));
console.log(playRound('Rock', 'Paper'));