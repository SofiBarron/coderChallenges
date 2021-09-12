let healthPoints = parseInt(prompt('How many health points do you have?'));

while (healthPoints != 1000) {
    switch (healthPoints) {
        case 750:
            console.log ('Use a potion');
            break;
        case 500:
            console.log ('Use a hi-potion');
            break;
        case 200:
            console.log ('Use an X-Potion');
            break;
        case 0:
            console.log ('Ups, game over!');
            break;
        default: 
            console.log ('Error, try again!');
            break;
    }
        healthPoints = prompt('How many health points do you have?');
        console.log(healthPoints);
}