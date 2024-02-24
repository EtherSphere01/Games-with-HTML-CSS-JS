let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let num = Math.floor(Math.random() * 3);
  return options[num];
};

const drawGame = () => {
  msg.innerText = "Game draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, compChoice) => {
  if (userWin) {
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    console.log("c win");
    msg.innerText = "You lose";
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  // Draw
  if (userChoice === compChoice) {
    drawGame();
  } else {
    userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if ((userChoice = "paper")) {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
