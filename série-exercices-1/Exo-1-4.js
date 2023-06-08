const readlineSync = require('readline-sync');
let completeName = readlineSync.question("What's your name and firstname? ");
let city = readlineSync.question("Where are you from? ");

console.log("My name is " + completeName + ". I live in " + city + ".");