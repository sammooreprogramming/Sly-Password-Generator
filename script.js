function generatePassword() {
  
    // Variable declaration // 
    var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specials = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
    
    // Empty Array variables //
    var results = [];
    var userInput = [];
    
    // Prompt questions listed below as variables //
    var pswdLength = prompt ("How many characters would you like in your password? (between 8 and 128).");
    var askNumbers = confirm ("Would you like numbers to be included in your password?");
    var askuppers = confirm ("Would you like uppercase letters to be included in your password?");
    var asklowers = confirm ("Would you like lowercase letters to be included in your password?");
    var askSpecials = confirm ("Would you like special characters to be included in your password?");
  
  // By using several consecutive, separate if statements the data from the prompt variables is consolidated efficiently //
  if (askNumbers){
    results = results.concat(numbers);
    
  }
  
  if (askuppers){
    results = results.concat(uppers);
  
  }
  
  if (asklowers){
    results = results.concat(lowers);
  
  }
  
  if (askSpecials){
    results = results.concat(specials);
  }
  
  for (var i = 0; i < pswdLength; i++) {
        // pushes the userInput array with a random password based on the user specified length of characters //
        // AND joins them elements into an array without spaces and returns the result. //
  userInput.push(results[Math.floor(Math.random() * results.length)]); 
    }

    return userInput.join("") ;
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);