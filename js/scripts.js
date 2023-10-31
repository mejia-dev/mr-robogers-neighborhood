// Business Logic

function countToTarget() {
  event.preventDefault();
  const inputNumber = parseInt(document.getElementById("numInput").value);
  let stepsToTarget = [];
  if (inputNumber === 0) {
    stepsToTarget.push(0);
    displayOutput(stepsToTarget);
    return;
  };
  if (inputNumber > 0) {
    for (let i = 0; i <= inputNumber; i++) {
      if (i.toString().match(/[123]/g)) {
        stepsToTarget.push(" " + runRoboRules(i));
      } else {
        stepsToTarget.push(" " + i);
      }
    }
  } else if (inputNumber < 0) {
    for (let i = 0; i >= inputNumber; i--) {
      if (i.toString().match(/[123]/g)) {
        stepsToTarget.push(" " + runRoboRules(i));
      } else {
        stepsToTarget.push(" " + i);
      }
    }
  };
  displayOutput(stepsToTarget);
};

function runRoboRules(number) {
  if (number.toString().includes("3")) {
    return "Won't you be my neighbor?";
  } else if (number.toString().includes("2")) {
    return "Boop!";
  } else if (number.toString().includes("1")) {
    return "Beep!";
  };
};


// UI Logic

function displayOutput(array) {
  let outputString = "";
  if (document.getElementById("reverseCount").checked) {
    outputString = array.reverse().toString();
  } else {
    outputString = array.toString();
  }
  let resultsDiv = document.getElementById("resultsDiv");
  resultsDiv.innerHTML = "";
  let outputParagraph = document.createElement("p");
  outputParagraph.append(outputString);
  resultsDiv.append(outputParagraph);
};

function runIntro() {
  const introSong = document.getElementById("robogersIntroSong");
  introSong.pause();
  introSong.currentTime = 0;
  introSong.play();
  introSong.volume = 0.5;
}

window.addEventListener("load", function () {
  runIntro();
  this.document.getElementById("inputForm").addEventListener("submit", countToTarget);
});