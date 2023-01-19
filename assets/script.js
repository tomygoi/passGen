// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
const criteria = {
  length: null,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false
};

criteria.length = prompt("Enter a password legnth (8-128 characters)");
criteria.lowercase = confirm("Include lowercase characters?");
criteria.uppercase = confirm("Include uppercase characters?");
criteria.numeric = confirm("Include numeric characters?");
criteria.special = confirm("Include special characters?");

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
  
  function shuffle(string) {
    var array = string.split("");
    var x = array.length, y, i;

    while (x) {
      i = Math.floor(Math.random() * x--);
      y = array[x];
      array[x] = array[i];
      array[i] = y;
    }
    return array.join("");
  }

password = shuffle(password).slice(0, criteria.length);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
