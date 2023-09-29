# Password-Generator

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  |

## Description

Generating a random password with JavaScript!

Deployed Site [https://blackswan1010.github.io/password-generator/](https://blackswan1010.github.io/password-generator/)

## JavascriptCode Examples

```js
// String of the alphabet and special characters needed for password generation
var letterString = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
```
Declaring and assigning string variables needed for password generation.

```js
// Declaring multiple variable arrays
var arrLowerCase = [];
for (var i = 0; i < letterString.length; i++) {
  arrLowerCase[i] = letterString.slice(i, i + 1);
}
```
Declaring an empty variable array, in which each iteration in the for loop has been assigned a character from the sliced string variable.

```js
// Global variables when the user interacts with the prompts
var numInput = 0;
var concatingArr = [];
var atLeastOne = 0;
```
Made empty Global variables for when the user interacts with the prompts to make their input/selection to change these values.

```js
// Conditional function to check for valid user inputs
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
```
After the user has made their selection, a series of if statements is met to validate the user's input to at least choose one of the following for their password generation.

## Learning Points

-Using variables and iterating through arrays to assign values
<br/>
-Using logical comparison operators and conditional statements to validate a user's input
<br/>
-Using functions to help breakdown tasks and their scope
<br/>
-Using the javascript's built-in methods for strings and arrays
<br/>
-Creating an object and a method within the same object which could be called later using the dot notation


## Author Info

#### Anthony Nguyen
```md
* [Github](https://github.com/Blackswan1010)
```

## Credits

Everyone in bootcamp class

## License

N/A