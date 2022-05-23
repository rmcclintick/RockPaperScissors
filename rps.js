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

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());