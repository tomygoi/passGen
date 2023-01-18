// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
const criteria = {
  length: null,
  lowercase: false,
  uppercase: false,
  numberic: false,
  special: false
};

criteria.length = prompt("Enter a password legnth (8-128 characters)");
criteria.lowercase = confirm("Include lowercase characters?");
criteria.length = confirm("Include uppercase characters?");
criteria.length = confirm("Include numeric characters?");
criteria.length = confirm("Include special characters?");

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

  let password = "";
  const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+-=[]\\|;':<>,.?/`~"
  };

  if (criteria.lowercase) {
    password += characters.lowercase;
  }
  if (criteria.uppercase) {
    password += characters.uppercase;
  }
  if (criteria.numeric) {
    password += characters.numeric;
  }
  if (criteria.special) {
    password += characters.special;
  }
  

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
