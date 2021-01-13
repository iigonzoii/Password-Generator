var numbers = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?/-=";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();

// WHEN I click the button to generate a password
// --something happens when i click the button
// THEN I am presented with a series of prompts for password criteria
// --after i click the button i see a prompt
// WHEN prompted for the length of the password
// -- length needs to be between 8 and 128
function generatePassword(){
  var passwordSelection = []
 var passwordLength = prompt("Please choose the length of your password (must be between 8 and 128 characters).")
 console.log(passwordLength)
 if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true )
 {alert("character count is invalid")
  return}
  else if (passwordLength >=8 && passwordLength <= 128 && isNaN(passwordLength) === false){
    var lowerCaseConfirm = confirm("do you want to include lower case letters?");
    if (lowerCaseConfirm === true){
      passwordSelection.push("lowerCase")
    } 
    
    // add variables for other options here
  }
  
}//created alert for numbers outside of peramiters 



// WHEN confirm for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt

// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
