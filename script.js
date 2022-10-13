// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get length and selected character types from user
function askUser() {
  var passLength = parseInt (window.prompt("Please enter your password length."));
  console.log(passLength);
  if(passLength === "" || passLength === null || isNaN(passLength) || passLength < 8 || passLength > 128) {
    window.alert("Please enter a valid password length.");
    return;
  }
  var characterString = "";
  if(window.confirm("Would you like lowercase characters?")) {
    // console.log("Add lowercase here.");
    characterString += "abcdefghijklmnopqrstuvwxyz"
  }
  if(window.confirm("Would you like uppercase characters?")) {
    // console.log("Add uppercase here.");
    characterString += "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  }
  if(window.confirm("Would you like numbers characters?")) {
    // console.log("Add numbers here.");
    characterString += "0123456789";
  }
  if(window.confirm("Would you like special characters?")) {
    // console.log("Add special characters here.");
    characterString += "~!@#$%&*()_+-=<>/?\|}{;:`',.";
  }
  // console.log(characterString);
  if(characterString === "") {
    window.alert("You must select one character type.");
    return;
  }
  return {
    passLength, characterString
  }
}

  // Return a password that matches the legnth and character type that the user selects
function generatePassword() {
  var options = askUser();
  if(options === undefined) {
    return "Please try again."
  }
  var myArray = options.characterString.split("");
  var password = "";
  for(var i = 0; i < options.passLength; i++) {
    var index = Math.floor(Math.random() * myArray.length)
    var digit = myArray[index];
    password += digit;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
