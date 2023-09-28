// Assignment Code
var generateBtn = document.querySelector("#generate");

// String of the alphabet and special characters needed for password generation
var letterString = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Variable of Arrays
var arrLowerCase = [];
for (var i = 0; i < letterString.length - 1; i++) {
  arrLowerCase[i] = letterString.slice(i, i + 1);
}

var arrUpperCase = [];
for (var i = 0; i < letterString.length - 1; i++) {
  arrUpperCase[i] = letterString.slice(i, i + 1).toUpperCase();
}

var arrSpecial = [];
for (var i = 0; i < specialChars.length - 1; i++) {
  arrSpecial[i] = specialChars.slice(i, i + 1);
}

var arrNum = [];
for (var i = 0; i < 10; i++) {
  arrNum[i] = "" + i + "";
}


// Global variables when the user interacts with the prompts
var numInput = 0;
var concatingArr = [];
var atLeastOne = 0;

// Conditional functions to check for valid user inputs
function numValidation() {
  numInput = prompt("Enter how many characters you would like in your password? \n (Between 8-128 characters)");
  while (numInput === "" || numInput <= 7 || numInput >= 129 || numInput.length === 0) {
    if (numInput < 8) {
      numInput = prompt("Enter a number more than 7, please!");
    } else if (numInput > 128) {
      numInput = prompt("Enter a number less than 129, please!");
    } else if (numInput === "" || num.length === 0) {
      numInput = prompt("No number was entered, Please enter a number!");
    }
  }

}

function choiceValidation() {
  while (atLeastOne <= 0) {
    var low = confirm("Would you like lowercase characters in your password?");
    var up = confirm("Would you like uppercase characters in your password?");
    var num = confirm("Would you like numbers in your password?");
    var special = confirm("Would you like special characters in your password?");

    if (low) {
      concatingArr = concatingArr.concat(arrLowerCase);
      atLeastOne = atLeastOne + 1;
    }
    if (up) {
      concatingArr = concatingArr.concat(arrUpperCase);
      atLeastOne = atLeastOne + 1;
    }
    if (num) {
      concatingArr = concatingArr.concat(arrNum);
      atLeastOne = atLeastOne + 1;
    }
    if (special) {
      concatingArr = concatingArr.concat(arrSpecial);
      atLeastOne = atLeastOne + 1;
    }
    if (atLeastOne <= 0) {
      alert("You haven't selected any choices in any of the prompts! Please choose at least one!")
    }

  }
}


// randomizes the string with the user selected choices
function random(x) {
  var num = x
  var tempArr = [];
  for (var i = 0; i < num; i++) {
    tempArr[i] = concatingArr[Math.floor(Math.random() * concatingArr.length)]
  }

  // Combines all the array elements into a string
  var tempString = tempArr.join("")

  return tempString;
}

// Functions being called mainly within this function
function generatePassword() {
  numValidation();
  choiceValidation();

  var final = random(numInput);
  return final;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```