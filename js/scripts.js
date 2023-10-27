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
  displayOutput(stepsToTarget);
};

function runRoboRules(number) {
  if (number.toString().includes("3")) {
    return "Won't you be my neighbor?"
  } else if (number.toString().includes("2") && !number.toString().includes("3")) {
    return "Boop!"
  }
};


// UI Logic

function displayOutput(array) {
  const outputString = array.toString();
  let resultsDiv = document.getElementById("resultsDiv");
  resultsDiv.innerHTML="";
  let outputParagraph = document.createElement("p");
  outputParagraph.append(outputString);
  resultsDiv.append(outputParagraph);
};

window.addEventListener("load", function () {
  this.document.getElementById("inputForm").addEventListener("submit", countToTarget)
});