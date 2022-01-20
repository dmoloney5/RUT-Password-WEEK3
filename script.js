// Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  // loop until we have a password
  var password = null;
  while (password === null) {
    password = generatePassword();
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//googled, taken from Mozilla docs
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

// Prompts that come up after you click generate password
function generatePassword() {
    var passwordLength = parseInt(prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128."));
  if (isNaN(passwordLength)) {
    alert("Please enter an integer!");
    return null;
  }
  if (passwordLength < 8) {
    alert("We can do better with Security! Let do above 8 characters!");
    
    return null;
  }
  if (passwordLength > 128) {
    alert("Okay that is going too far!  Let's get it below 128 characters!");
   
    return null;
  }

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacter
  var minimumCount = 0;
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");

   // Generator functions also found by goolging
  var passArray = {
    getNumbers: function () {
     return String.fromCharCode(getRandomInt(0, 10) + 48)
    },

    getLowerCases: function () {
     return String.fromCharCode(getRandomInt(0, 26) + 97)
    },

    getUpperCases: function () {
      return String.fromCharCode(getRandomInt(0, 26) + 65)
    },

    getSpecialCharacters: function () {
     index = getRandomInt(0, specialCharacters.length);
      return specialCharacters[index];
    }

  };

    // empty string variable for the for loop below
  var passwordGenerated = "";

  // loop getting random characters
   while (passwordGenerated.length < passwordLength) {
    var randomNumberPicked = getRandomInt(0, 4);

    //skip if we picked an index that the user hit cancel on
    if (randomNumberPicked == 0) {
      if (!numbers) continue;
      passwordGenerated += passArray.getNumbers();
    }
    else if (randomNumberPicked == 1) {
      if (!lowerCases) continue;
      passwordGenerated += passArray.getLowerCases();
    }
    else if (randomNumberPicked == 2) {
      if (!upperCases) continue;
      passwordGenerated += passArray.getUpperCases();
    }
    else if (randomNumberPicked == 3) {
      if (!special) continue; 
      passwordGenerated += passArray.getSpecialCharacters();
    }
  }

  return passwordGenerated;

}