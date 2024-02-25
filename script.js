let userScore = 0;
let compScore = 0;
let draw = 0;

const choices = document.querySelectorAll(".choice");
const reset = document.querySelector(".reset");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawPara = document.querySelector("#draw");
const userImageChange = document.querySelector(".p-change");
const compImageChange = document.querySelector(".c-change");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let num = Math.floor(Math.random() * 3);
  compImageChange.src = `./images/${options[num]}.png`;
  return options[num];
};

const drawGame = (draw) => {
  msg.innerText = "Game draw";
  msg.style.backgroundColor = "#081b31";
  drawPara.innerText = draw;
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
    draw++;
    drawGame(draw);
    userImageChange.src = `./images/${userChoice}.png`;
  } else {
    userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
      userImageChange.src = `./images/${userChoice}.png`;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
      userImageChange.src = `./images/${userChoice}.png`;
    } else {
      userWin = compChoice === "rock" ? false : true;
      userImageChange.src = `./images/${userChoice}.png`;
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

reset.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  draw = 0;

  userScorePara.innerText = "0";
  compScorePara.innerText = "0";
  drawPara.innerText = "0";

  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#081b31";

  userImageChange.src = "./images/user.png";
  compImageChange.src = "./images/computer.png";
});
