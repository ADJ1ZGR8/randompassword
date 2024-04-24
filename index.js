const passwordInput = document.getElementById("passwordInput");
const passwordbox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "~`!@#$%^&*()_+-=|/.,;:";
const numbers = "0123456789";

function generateRandomPassword(input) {
  let password = input.trim();

  if (password.length > 0) {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomLowercase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    const randomUppercase = upperCase[Math.floor(Math.random() * upperCase.length)];

    const position1 = Math.floor(Math.random() * (password.length + 1));
    const position2 = Math.floor(Math.random() * (password.length + 1));

    password =
      password.slice(0, position1) +
      randomSymbol +
      randomNumber +
      randomLowercase +
      randomUppercase +
      password.slice(position1, position2) +
      randomSymbol +
      randomNumber +
      password.slice(position2);
  } 
  
  while (password.length < length) {
    const randomCharacter = upperCase + lowerCase + symbols + numbers;
    password += randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
  }

  // Trim excess characters if password length exceeds 12
  if (password.length > length) {
    password = password.slice(0, length);
  }

  return password;
}

function generateAndDisplayPassword() {
  const userInput = passwordInput.value;
  const randomPassword = generateRandomPassword(userInput);
  passwordbox.value = randomPassword;
}

function copyPassword() {
  passwordbox.select();
  document.execCommand("copy");
}
