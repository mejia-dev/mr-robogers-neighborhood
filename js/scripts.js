// Business Logic

function countToTarget() {
  event.preventDefault();
  const inputString = parseInt(document.getElementById("numInput").value);
  let stepsToTarget = [];
  if (inputString === 0) {
    stepsToTarget.push(0);
    displayOutput(stepsToTarget);
    return;  
  };
  displayOutput(stepsToTarget);
};

function runRoboRules() {

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