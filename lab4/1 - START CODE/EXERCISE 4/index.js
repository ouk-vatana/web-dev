// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;
let attempts = 0; // Track number of attempts

// DOM ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPassword);

const instructionLabel = document.getElementById("instructionLabel");

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // Reset game state and show password view
  attempts = 0; // Reset the attempts counter
  passwordInput.value = ""; // Clear input field
  instructionLabel.textContent = "Enter your code (You can try 3 times only !)";
  show(passwordView);
  hide(lostView);
  hide(wonView);
}

function showWin() {
  // Show the win view
  hide(passwordView);
  hide(lostView);
  show(wonView);
}

function showLost() {
  // Show the lost view
  hide(passwordView);
  show(lostView);
}

function handleCheck() {
  const enteredCode = parseInt(passwordInput.value);

  if (enteredCode === SECRET_CODE) {
    // If the entered code matches the SECRET_CODE, show win view
    showWin();
  } else {
    // If the entered code is wrong, increment attempts and check if it's 3
    attempts++;
    if (attempts >= 3) {
      // If the user has used all attempts, show lost view
      showLost();
    } else {
      // Update the instruction label to inform the user of remaining attempts
      instructionLabel.textContent = `Incorrect! You have ${3 - attempts} attempt(s) left.`;
    }
  }
}

function handleEnterPassword(event) {
  if (event.key === "Enter") {
    // Trigger the check when the Enter key is pressed
    handleCheck();
  }
}

// MAIN   ---------------------------------------------------------
