var readLine = require('readline-sync');
var chalk = require('chalk');

console.log("Hello! Welcome to", chalk.red("Neha's"), "quiz!");
console.log("If you know me at all, you'll know that I am a", chalk.red('TVfXQ'), "fan!");
console.log('I am a', chalk.red('CASSIOPEIA!'));
console.log("But that's not all! I am also amazing at a lot of things.");
console.log("How well do you know me?");

var highScores = [
  {
    name: "Neha",
    scored: 5
  }
];

var score = 0;

var questions = [{
  question: "Where am I from? ",
  answer: "Bangalore"
}, {
  question: "How old am I? ",
  answer: "23"
},
{
  question: "How many languages do I know? ",
  answer: "8"
},
{
  question: "When did I start listening to Korean Music? ",
  answer: "2008"
},
{
  question: "My favourite color is? ",
  answer: "Red"
}];

var username = "";

function welcomeUser() {
  console.log();
  username = readLine.question("What's your name? ");
  console.log("Let's see how well you know me, " + username+"!");
  console.log();
}

function answerCheck(question, answer) {
  var userInput = readLine.question(question);

  if (userInput.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
  }
}

function runGame() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    answerCheck(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You scored = ", score);
  highScores.push({
    name: username,
    scored: score
  })
  console.log();
  console.log(chalk.blue("HIGH SCORES ARE :"))
  highScores.map(score => console.log(score.name, " : ", score.scored))
}


welcomeUser();
runGame();
showScores();