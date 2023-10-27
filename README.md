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

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:


Describe displayOutput():

Test:
Code:
Expected Output:









/// PSEUDOCODE, please ignore

Three functions. Upon submit, run countToTarget, then once value is returned, display output using displayOutput()

runRoboRules(input):

countToTarget():
  get input

  let countVal = 0
  let stepsToTarget = 0

  if num = 0
    display 0, end

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

Send stepsToTarget to new function displayOutput(param). This will write it to the screen