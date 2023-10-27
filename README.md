Tests:

Describe runRoboRules():

Test: "It will return "Won't you be my neighbor?" if input contains 3"
Code: runRoboRules(3)
Expected Output: "Won't you be my neighbor?"

Test: "It will return "Boop!" if input contains 2 and does not contain 3"
Code: runRoboRules(2)
Expected Output: "Boop!"

Test: "It will return "Beep!" if input contains 1 and does not contain 2 and does not contain 3"
Code: runRoboRules(1)
Expected Output: "Beep!"


Describe countToTarget():

Test: "It will return 0 if the inputted number is 0"
Code: countToTarget(0)
//function does not technically accept input, but input parameter/argument is added for demonstration purposes
Expected Output: ["0"]

Test: "It will return the steps to get to a number if the inputted number is greater than 0"
Code: countToTarget(4)
//function does not technically accept input, but input parameter/argument is added for demonstration purposes
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4"]

Test: "It will return the steps to get to a number if the inputted number is less than 0"
Code: countToTarget(-4)
//function does not technically accept input, but input parameter/argument is added for demonstration purposes
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", "-4"]


Describe displayOutput():

Test: "It will take an array and return a string"
Code: displayOutput(["0"])
Expected Output: "0"









/// PSEUDOCODE, please ignore

Three functions. Upon submit, run countToTarget, then once value is returned, display output using displayOutput()

runRoboRules(input):

countToTarget():
  get input

  let countVal = 0
  let stepsToTarget = 0

  if num = 0
    append 0 to stepsToTarget

  if num > 0 count up by one until you reach the number
  display 0
  for 
    i=NUMBER;i<NUMBER; i++
      countVal = value of i
      get countVal and if contains 1,2,3, turn into new variable and send to runRoboRules(input)
      append the new value to stepsToTarget

  if num < 0 count down by one until you reach the number
    same thing for negative, except count down

  return stepsToTarget

Send stepsToTarget to new function displayOutput(param). This will clear the screen, then write it to the screen