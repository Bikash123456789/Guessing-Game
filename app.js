const input = document.querySelector("input");
const checkBtn = document.querySelector(".check");
const reset = document.querySelector(".reset");
const randomNumber = document.querySelector(".number");
const display = document.querySelector(".display-result");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");

let scoreValue = 5;
let highScoreValue = 0;

let winNumber = Math.floor(Math.random() * 5 + 1);
console.log(winNumber);

//reset Function
function resetGame() {
  winNumber = Math.floor(Math.random() * 5 + 1);
  console.log(winNumber);
  scoreValue = 5;
  score.textContent = scoreValue;
  display.textContent = "Start Guessing...";
  input.value = "";
  randomNumber.textContent = "?";
  document.body.style.backgroundColor = "black";
}

//Checks Winner or Loser
function check() {
  //If Current Score is Greater than 0
  if (scoreValue > 0) {
      //Convert input into Number
    const myInput = Number(input.value);

    //if there is no input value
    if (!myInput) {
      display.textContent = "Enter a value";
    }
    //if values match
    else if (myInput == winNumber) {
      document.body.style.backgroundColor = "green";
      display.textContent = "👌🥇 Winner, Congrats!";
      randomNumber.textContent = winNumber;

      //set HighScore
      if( scoreValue > highScoreValue){
          highScoreValue = scoreValue;
          highScore.textContent = highScoreValue;
      }
      
    }

    //values don't match
    else {
      scoreValue--;
      score.textContent = scoreValue;
      if (scoreValue < 1) {
        display.textContent = "☹ You Lose";
        document.body.style.backgroundColor = "#D22B2B";
        return;
      }
      //Entered Number is small
      if (myInput > winNumber) {
        display.textContent = "Enter Smaller Number";
      }
      //Entered Number is big
      else {
        display.textContent = "Enter Bigger Number";
      }
    }
  }
}

//Click Event Listener
checkBtn.addEventListener("click", () => {
  check();
});

//Reset Event Listener
reset.addEventListener("click", () => {
  resetGame();
});
