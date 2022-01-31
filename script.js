// how am i storing the data?... list global variables as strings at the top
let numbers = "0123456789";
let specialChars = "!@#$%^&*()_+~`|}{[]:;?/-=";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = lowerCase.toUpperCase();
let upperCaseResponse = false;
let numbersResponse = false;
let specialCharsResponse = false;
let lowerCaseResponse = false;
let desiredLength = 0;
let includedCharContainer = "";
let newPassword = "";


// how do i prompt choices?.. create a function to prompt the choices
function choices() {
  desiredLength = prompt("Please choose the length of your password (must be between 8 and 128 characters).")
  if (desiredLength > 7 && desiredLength < 129) {
    alert(`your password will contain ${desiredLength} characters`)
  } else {
    alert("your character count is invalid")
    desiredLength = prompt("Please choose the length of your password (must be between 8 and 128 characters).")
  }
  upperCaseResponse = confirm("do you want to include upper case letters? Choose Ok for yes and cancel for no.");
  numbersResponse = confirm("do you want to include numbers? Choose Ok for yes and cancel for no.");
  specialCharsResponse = confirm("do you want to include special characters? Choose Ok for yes and cancel for no.");
  lowerCaseResponse = confirm("do you want to include lower case letters? Choose Ok for yes and cancel for no.");
}

/* how do i create somewhere that stores all the different types of characters based on their selection?....
  write a function that references our boolean letiables to figure out which strings to include in our master string.....
  we will concat the included strings based on the user input criteria. */
function generateCharOptions() {
  if (upperCaseResponse)
    includedCharContainer = includedCharContainer.concat(upperCase)
  if (numbersResponse)
    includedCharContainer = includedCharContainer.concat(numbers)
  if (specialCharsResponse)
    includedCharContainer = includedCharContainer.concat(specialChars)
  if (lowerCaseResponse)
    includedCharContainer = includedCharContainer.concat(lowerCase)
}
/* how do we generate the password?...i will create a function to randomize the characters in our library based on the users selection
  we write a for loop that is set to run the length of desired character selection
  appends each character to the password string 
 */

  // make newPassword equal to an empty string so it resets everytime you choose something new.
function generatePassword() {
  newPassword=""
  for (i = 0; i < desiredLength; i++) {
    let random = Math.floor(Math.random() * includedCharContainer.length);
    newPassword = newPassword + includedCharContainer[random];
  }
  return newPassword
}




// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  choices();
  generateCharOptions();
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
