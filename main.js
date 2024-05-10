// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let outputElTwo = document.getElementById("dice-output");
let outputElThree = document.getElementById("dice-output2");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let oneEl = document.getElementById("one-out");
let twoEl = document.getElementById("two-out");
let threeEl = document.getElementById("three-out");
let fourEl = document.getElementById("four-out");
let fiveEl = document.getElementById("five-out");
let sixEl = document.getElementById("six-out");

// Coutn Variables
let numHeads = 0;
let numTails = 0;
let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;
let numSeven = 0;
let numEight = 0;

// Button event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  let randNum2 = Math.random();
  console.log(randNum2);

  let randNum3 = Math.random();
  console.log(randNum3);

  // Simulate the coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails++;
    tailsEl.innerHTML = numTails;
  }

  // Simulate the Dice Roll
  if (randNum2 < 0.16) {
    outputElTwo.innerHTML = "<img src='img/1.png' />";
    numOne++;
    oneEl.innerHTML = numOne;
    numSeven = 1;
  } else if (randNum2 < 0.33) {
    outputElTwo.innerHTML = "<img src='img/2.png' />";
    numTwo++;
    twoEl.innerHTML = numTwo;
    numSeven = 2;
  } else if (randNum2 < 0.5) {
    outputElTwo.innerHTML = "<img src='img/3.png' />";
    numThree++;
    threeEl.innerHTML = numThree;
    numSeven = 3;
  } else if (randNum2 < 0.66) {
    outputElTwo.innerHTML = "<img src='img/4.png' />";
    numFour++;
    fourEl.innerHTML = numFour;
    numSeven = 4;
  } else if (randNum2 < 0.83) {
    outputElTwo.innerHTML = "<img src='img/5.png' />";
    numFive++;
    fiveEl.innerHTML = numFive;
    numSeven = 5;
  } else {
    outputElTwo.innerHTML = "<img src='img/6.png' />";
    numSix++;
    sixEl.innerHTML = numSix;
    numSeven = 6;
  }

  // Simulate Another Dice Roll
  if (randNum3 < 0.16) {
    outputElThree.innerHTML = "<img src='img/1.png' />";
    numOne++;
    oneEl.innerHTML = numOne;
    numEight = 1;
  } else if (randNum3 < 0.33) {
    outputElThree.innerHTML = "<img src='img/2.png' />";
    numTwo++;
    twoEl.innerHTML = numTwo;
    numEight = 2;
  } else if (randNum3 < 0.5) {
    outputElThree.innerHTML = "<img src='img/3.png' />";
    numThree++;
    threeEl.innerHTML = numThree;
    numEight = 3;
  } else if (randNum3 < 0.66) {
    outputElThree.innerHTML = "<img src='img/4.png' />";
    numFour++;
    fourEl.innerHTML = numFour;
    numEight = 4;
  } else if (randNum3 < 0.83) {
    outputElThree.innerHTML = "<img src='img/5.png' />";
    numFive++;
    fiveEl.innerHTML = numFive;
    numEight = 5;
  } else {
    outputElThree.innerHTML = "<img src='img/6.png' />";
    numSix++;
    sixEl.innerHTML = numSix;
    numEight = 6;
  }
  let sum = numEight + numSeven;
  document.getElementById(
    "sum"
  ).innerHTML = ` ${numEight} + ${numSeven} = ${sum}`;
}
