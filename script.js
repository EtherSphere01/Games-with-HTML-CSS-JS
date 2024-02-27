// Rock Paper Scissors

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

// Tic Tac Toe

let boxes = document.querySelectorAll(".box");
let reset2 = document.querySelector(".reset2");
let winner = document.querySelector(".msg2");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let count = 0;

const checkWinner = () => {
  count++;
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        winner.innerText = `Winner = ${pos1Val}`;
        boxes[pattern[0]].style.backgroundColor = "gray";
        boxes[pattern[1]].style.backgroundColor = "gray";
        boxes[pattern[2]].style.backgroundColor = "gray";

        boxes[pattern[0]].style.color = "white";
        boxes[pattern[1]].style.color = "white";
        boxes[pattern[2]].style.color = "white";

        boxes.forEach((box) => {
          box.disabled = true;
        });
      } else if (count === 9) {
        winner.innerText = `Draw`;
        boxes.forEach((box) => {
          box.disabled = true;
          box.style.backgroundColor = "gray";
          box.style.color = "white";
        });
      }
    }
  }
};

reset2.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
    box.style.color = "#b0413e";
    box.innerText = "";
    box.disabled = false;
    turnO = true;
  });
});
