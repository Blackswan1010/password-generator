// Assignment Code
var generateBtn = document.querySelector("#generate");

// String of the alphabet and special characters needed for password generation
var letterString = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


var arrLowerCase = [];
for (var i = 0; i < letterString.length - 1; i++) {
  arrLowerCase[i] = letterString.slice(i, i + 1);
}

var arrUpperCase = [];
for(var i = 0; i < letterString.length - 1; i++) {
  arrUpperCase[i] = letterString.slice(i, i + 1).toUpperCase();
}

var arrSpecial = [];
for(var i = 0; i < specialChars.length - 1; i++) {
  arrSpecial[i] = specialChars.slice(i, i + 1);
}

var arrNum = [];
for (var i = 0; i < 10; i++) {
  arrNum[i] = "" + i + "";
}


// Console logging declaration of the variable arrays
console.log(arrLowerCase);
console.log(arrUpperCase);
console.log(arrSpecial);
console.log(arrNum);


var numInput = 0;
var tempArr = [];
var newPassword = "";
var atLeastOne = 0;

// Conditional functions to check valid user inputs
function choiceValidation() {
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

  while (atLeastOne <= 0) {
    var low = confirm("Would you like lowercase characters in your password?");
    var up = confirm("Would you like uppercase characters in your password?");
    var num = confirm("Would you like numbers in your password?"); 
    var special = confirm("Would you like special characters in your password?");

    if (low) {
      tempArr = tempArr.concat(arrLowerCase);
      atLeastOne = atLeastOne + 1;
    }
    if (up) {
      tempArr = tempArr.concat(arrUpperCase);
      atLeastOne = atLeastOne + 1;
    }
    if(num) {
      tempArr = tempArr.concat(arrNum);
      atLeastOne = atLeastOne + 1;
    }
    if(special) {
      tempArr = tempArr.concat(arrSpecial);
      atLeastOne = atLeastOne + 1;
    }
    if (atLeastOne <= 0) {
      alert("You haven't selected any choices in any of the prompts! Please choose at least one!")
    }
    

  }
}

function random(x) {
  for (var i = 0; i < x - 1; i++) {
    newPassword = tempArr[Math.floor((Math.random() * x))]
  }


  return newPassword;
}

function generatePassword() {
  choiceValidation();
  
  return random(numInput);
}

generatePassword();


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