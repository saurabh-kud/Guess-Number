"use strict";
//for dark mode on site
let dark = "darkmode";
document.querySelector(".darkmode").addEventListener("click", function (e) {
  //    document.querySelector(".darkmode").innerHTML="normal";
  //   document.querySelector("body").style.backgroundColor = "black";
  dark = document.querySelector(".darkmode").innerHTML;
  //   console.log(dark);
  if (dark == "darkmode") {
    document.querySelector("body").style.backgroundColor = "#333456";
    document.querySelector(".darkmode").innerHTML = "normal";
    dark = "normal";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".darkmode").innerHTML = "darkmode";
    dark = "darkmode";
  }
});

//for functioning guess game

let score = 20;
let highscore = 0;

const random = function () {
  return Math.trunc(Math.random() * 21);
};
let ranNum = random();
const displayGuess = function (message) {
  return (document.querySelector(".firstP").innerHTML = message);
};
// displayGuess("hello");
console.log(ranNum);
const displayScore = function (message) {
  return (document.querySelector(".score").innerHTML = message);
};

const displayHighScore = function (message) {
  return (document.querySelector(".highscore").innerHTML = message);
};

document.querySelector(".check").addEventListener("click", function () {
  //   console.log("this is from check");
  const value = Number(document.querySelector(".valu").value);
  // console.log(value);
  if (!value) displayGuess("⛔not a number");
  //  for if user inputed same number as random function
  else if (value === ranNum && score > 0) {
    displayGuess("🎉correct number");
    document.querySelector("body").style.background = "green";
    document.querySelector(".box").innerHTML = value;
    if (score > highscore) {
      highscore = score;
      displayHighScore(highscore);
    }
    document.querySelector(".guess").style.background =
      "linear-gradient(to right,var(--Lime-Green),var(--Bright-Cyan))";
  } else if (value !== ranNum) {
    if (score > 0) {
      score--;
      displayScore(score);
      value > ranNum ? displayGuess("😁too high") : displayGuess("😢too low");
    } else {
      displayScore(0);
      displayGuess("❌you lost the game");
    }
  }
});

//for again button functioning
// console.log(dark);
document.querySelector(".again").addEventListener("click", function () {
  console.log("this from again");
  score = 20;
  displayScore(score);

  dark == "darkmode"
    ? (document.querySelector("body").style.backgroundColor = "white")
    : (document.querySelector("body").style.backgroundColor = "#333456");
  document.querySelector(".box").innerHTML = "?";
  displayGuess("🕗 start guessing...");
  document.querySelector(".valu").value = "";
  // document.querySelector(".guess").style.background =
  // "";
  document.querySelector(".guess").style.background =
    "linear-gradient(to right, var(--Bright-Cyan), var(--Lime-Green));";
});
