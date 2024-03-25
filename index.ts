#! /usr/bin/env node

//1: computer will generat ea new number.
//2: user input for guessing number.
//3: compare user input & computer generated number and show result.

import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {name: "userGuessedNumber", type: "number",
    message: "Please guess a number between 1-10",
    }
]);

if(answer.userGuessedNumber===randomNumber){
    console.log("Congratulations! you guessed a true number");
} else {
    console.log("You guessed a wrong number");
}
