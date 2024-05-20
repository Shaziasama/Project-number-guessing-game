#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 10: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("conguralations, you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
