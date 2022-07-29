//page
//let roll = document.getElementById("roll");
let diceImage = document.getElementById("diceImage");
let button = document.getElementById("button");
let score = document.getElementById("score");
let total = document.getElementById("total");
let playBtn = document.getElementById("playBtn");
let count = 0;

diceImage.src = "";


button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * 6) + 1;
  
  
  if (num === 1 || score <= 20) {
    diceImage.src = "images/dice1.svg";
    score.textContent=`You Lose Try Again`
  } else if (num == 2) {
    diceImage.src = "images/dice2.svg";
    count += 2;
    score.textContent = `${count}`;
  } else if (num == 3) {
    diceImage.src = "images/dice3.svg";
    count += 3;
    score.textContent = `${count}`;
  } else if (num == 4) {
    diceImage.src = "Images/dice4.svg";
    count += 4;
    score.textContent = `${count}`;
  } else if (num == 5) {
    diceImage.src = "Images/dice5.svg";
    count += 5;
    score.textContent = `${count}`;
  } else if (num == 6) {
    diceImage.src = "Images/dice6.svg";
    count += 6;
    score.textContent = `${count}`;
  }
  if (count >= 20) {
    score.textContent = `You win`;
  }
});

playBtn.addEventListener("click", () => {
  count = 0;
  diceImage.src = "Images/dicetarget.svg";
  score.textContent = `0`;
});