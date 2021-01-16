// how am i storing the data?... list global variables as strings at the top
var numbers = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?/-=";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var upperCaseResponse = false;
var numbersResponse = false;
var specialCharsResponse = false;
var lowerCaseResponse = false;
var desiredLength = 0;
var includedCharContainer = "";
var newPassword = "";

// how do i prompt choices?.. create a function to prompt the choices
function choices() {
  desiredLength = prompt("Please choose the length of your password (must be between 8 and 128 characters).")
  upperCaseResponse = confirm("do you want to include upper case letters?");
  numbersResponse = confirm("do you want to include numbers?");
  specialCharsResponse = confirm("do you want to include upper case letters?");
  lowerCaseResponse = confirm("do you want to include lower case letters?");
}

/* how do i create somewhere that stores all the different types of characters based on their selection?....
	write a function that references our boolean variables to figure out which strings to include in our master string.....
	we will concat the included strings based on the user input criteria. */
function generateCharOptions(){
  if (upperCaseResponse == true)
    includedCharContainer = includedCharContainer.concat(upperCase)
  if (numbersResponse == true)
  includedCharContainer = includedCharContainer.concat(numbers)
  if (specialCharsResponse == true)
  includedCharContainer = includedCharContainer.concat(specialChars)
  if (lowerCaseResponse == true)
  includedCharContainer = includedCharContainer.concat(lowerCase)
}
/* how do we generate the password?...i will create a function to randomize the characters in our library based on the users selection
	we write a for loop that is set to run the length of desired character selection
	appends each character to the password string 
 */
function generatePassword(){
  for (i=0; i < desiredLength; i++){
    var random = Math.floor(Math.random()*includedCharContainer.length);
    newPassword = newPassword + includedCharContainer[random];
  }
  return newPassword
} 




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  choices();
  generateCharOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
