const buttonEl = document.querySelector("button");
const selectEl = document.getElementById("game");
const reslutContainerEl = document.getElementById("reslut-container");

buttonEl.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  let value = selectEl.value;

  switch (randomNumber) {
    case 1:
      computerChoice = "scissors";
      break;
    case 2:
      computerChoice = "rock";
      break;
    case 3:
      computerChoice = "paper";
      break;
  }

  const win =
    (value === "scissors" && computerChoice === "paper") ||
    (value === "rock" && computerChoice === "scissors") ||
    (value === "paper" && computerChoice === "rock");

  if (value === computerChoice) {
    renderResult(value, computerChoice, "비겼습니다.");
  } else if (win) {
    renderResult(value, computerChoice, "이겼습니다.");
  } else {
    renderResult(value, computerChoice, "졌습니다.");
  }
});

function renderResult(yourResult, computerResult, message) {
  reslutContainerEl.innerHTML = "";
  const you = document.createElement("p");
  const computer = document.createElement("p");
  const reslutMessage = document.createElement("p");

  you.textContent = `당신의 선택: ${yourResult}`;
  computer.textContent = `컴퓨터의 선택: ${computerResult}`;
  reslutMessage.textContent = message;

  reslutContainerEl.append(you);
  reslutContainerEl.append(computer);
  reslutContainerEl.append(reslutMessage);
}
