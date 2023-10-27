# Mr. Roboger's Neighborhood

#### By github.com/mejia-dev

#### Mr. Roboger will count to your number, while substituting some numbers for words or phrases.

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

This webpage is a counting page. Input a number, then a list of numbers counting up (or down) to that number will be displayed.
Some numbers will be replaced, according to the defined rules below:

* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
  * For example, all digits of the number 3, 32, or 8763 would be replaced with "Won't you be my neighbor?"
* For numbers that contain a 2, all digits are replaced with "Boop!"
  * For example, all digits of the number 2, 21, or 2099 would be replaced with "Boop!"
* For numbers that contain a 1, all digits are replaced with "Beep!"
  * For example, all digits of the number 1, 11, or 109 would be replaced with "Beep!"

## Setup/Installation Requirements
Option A:
* Navigate to https://mejia-dev.github.io/mr-robogers-neighborhood/ in your browser of choice

Option B:
* Clone this repository to your desktop (from the git console, run "git clone https://github.com/mejia-dev/mr-robogers-neighborhood.git" without quotes)
* Navigate to the top level of the directory.
* Open the index.html file in your browser of choice.


## Known Bugs

* Sound may not autoplay due to policy restrictions unless the user initiates interaction on the page: https://goo.gl/xX8pDD

## License

MIT License

Copyright (c) 2023 github.com/mejia-dev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests:

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