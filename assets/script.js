// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var criteria = {
  length: null,
  lowercase: false,
  uppercase: false,
  numberic: false,
  special: false
};

criteria.length = prompt("Enter a password legnth (8-128 characters)");
criteria.lowercase = prompt("Include lowercase characters?");
criteria.length = prompt("Include uppercase characters?");
criteria.length = prompt("Include numeric characters?");
criteria.length = prompt("Include special characters?");

if (isNaN(criteria.length) ||
    criteria.length < 8 ||
    criteria.length > 128 ||
    !criteria.lowercase && 
    !criteria.uppercase &&
    !criteria.numeric && 
    !criteria.special)
    {
      alert("Invalid input, please try again.");
      return;
    }

  var password = "";
  var characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+-=[]\\|;':<>,.?/`~"
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
