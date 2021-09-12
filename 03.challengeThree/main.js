let healthPoints = parseInt(prompt('How many health points do you have?'));

while (healthPoints != 1000) {
    if (healthPoints < 1000 && healthPoints>=750) {
        console.log ('Use a potion');}
    else if (healthPoints < 750 && healthPoints >=500) {
        console.log ('Use a hi-potion');
    }
    else if (healthPoints < 500 && healthPoints >=100) {
        console.log ('Use an x-potion');
    }
    else if (healthPoints === 0) {
        console.log ('Ups, game over!')
    }
    else {
        console.log ('Error, try again!')
    }
        healthPoints = prompt('How many health points do you have?');
        console.log(healthPoints);
}