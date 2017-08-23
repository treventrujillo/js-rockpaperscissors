var ROCK = "Rock";
var PAPER = "Paper";
var SCISSORS = "Scissors";
var TIE = 0
var USER = 1
var COMPUTER = 2

var userWins = 0
var computerWins = 0

var answers = [ROCK, PAPER, SCISSORS];

var scissors = document.getElementById("scissors");
var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
scissors.addEventListener("click", answerScissors);
paper.addEventListener("click", answerPaper);
rock.addEventListener("click", answerRock);

function answerScissors() {
  pushAnswer(SCISSORS);
};

function answerPaper() {
  pushAnswer(PAPER);
};

function answerRock() {
  pushAnswer(ROCK);
};

function pushAnswer(answer) {
  var computerAnswer = answers[Math.floor(Math.random()*answers.length)];
  var whoWon;

  // compare the answers to figure out who won
  if (answer == computerAnswer) {
    whoWon = TIE;
  } else if(answer == ROCK && computerAnswer == PAPER) {
    whoWon = COMPUTER;
  } else if(answer == ROCK && computerAnswer == SCISSORS) {
    whoWon = USER;
  } else if(answer == SCISSORS && computerAnswer == ROCK) {
    whoWon = COMPUTER;
  } else if (answer == SCISSORS && computerAnswer == PAPER) {
    whoWon = USER;
  } else if (answer == PAPER && computerAnswer == SCISSORS) {
    whoWon = COMPUTER;
  } else if (answer == PAPER && computerAnswer == ROCK) {
    whoWon = USER;
  };

  // set the message based on who won
  var msg = ''
  if(whoWon == TIE){
    msg = "Tie! Try again"
  } else if (whoWon == COMPUTER){
    msg = "Computer won!"
    computerWins++;
  } else if (whoWon == USER){
    msg = "User won!"
    userWins++;
  }


  // set the HTML output
  var userWinsElement = document.getElementById("userWins");
  userWinsElement.setAttribute("class", "scoreboard")
  userWinsElement.innerHTML = userWins;

  var computerWinsElement = document.getElementById("computerWins");
  computerWinsElement.setAttribute("class", "scoreboard")
  computerWinsElement.innerHTML = computerWins;

  var scoreboard = document.getElementById("scoreboard");
  scoreboard.setAttribute("class", "scoreboard")
  scoreboard.innerHTML = "<p>"+msg+"</p>";
};
