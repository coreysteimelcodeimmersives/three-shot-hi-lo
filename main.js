const prompt = require('prompt-sync')({signit: true});

let randNum = Math.ceil(Math.random()*100);
// console.log('randNum: ' + randNum);

console.log("I'm thinking of a number between 1 and 100. Try to guess it.");
let guess = prompt('> ');
let guessNum = Number(guess);

let count = 1;
let userCount = count;

if(guessNum === randNum){
    count = 3;
}

while (count < 3){

    if (guessNum < randNum){
        console.log("Sorry, too low! Guess again.")
    } else if (guessNum > randNum) {
        console.log("Sorry, too high! Guess again")
    }

    guess = prompt('> ');
    guessNum = Number(guess);
    
    count++;
    userCount = count;

    if(guessNum === randNum){
        count = 3;
    }
}

if (guessNum === randNum){
    console.log('Congratulations, ' + randNum + ' is correct!');
}

if (userCount === 3){
    if (guessNum < randNum) {
        console.log("Sorry, too low. I was thinking of " + randNum + ".") 
    } else if (guessNum > randNum) {
        console.log("Sorry, too high. I was thinking of " + randNum + ".")
    }
}