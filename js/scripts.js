// Business Logic

function countToTarget() {
  event.preventDefault();
  const inputString = parseInt(document.getElementById("numInput").value);
  let stepsToTarget = [];
  if (inputString === 0) {
    stepsToTarget.push(0);
    return stepsToTarget;

  };
  return stepsToTarget;
};

function runRoboRules() {

};


// UI Logic

function displayOutput() {

};

window.addEventListener("load", function () {
  this.document.getElementById("inputForm").addEventListener("submit", countToTarget)
});