// Assignment Code
var generateBtn = document.querySelector("#generate");


let numCharacters = prompt("How many characters would you like in your password?", 0);
let isLowerCase = confirm("Would you like lowercase characters in your password?");
let isUpperCase = confirm("Would you like uppercase characters in your password?");
let isNumeric = confirm("Would you like numbers in your password?");
let isSpecial = confirm("Would you like special characters in your password?");

function isBetween(x) {
  while(x < 8 || x > 128) {
    prompt("Please enter a number between 8 and 128!");
  }
  return x;
}

function isTrue(x) {
  if (x === true) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isBetween(numCharacters));
console.log(isTrue(isLowerCase));
console.log(isTrue(isUpperCase));
console.log(isTrue(isNumeric));
console.log(isTrue(isSpecial));


function generatePassword() {

  return;
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