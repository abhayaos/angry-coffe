// index.js

// Array of angry messages
const angryMessages = [
  "☕😡 BRO, DID YOU JUST FORGET A SEMICOLON?!",
  "🔥💥 WHAT IS THIS?! SERIOUSLY?!",
  "☕☕ TOO MUCH COFFEE, NOT ENOUGH CODE!",
  "💀 ERROR DETECTED! FIX IT NOW!"
];

// Array of sarcastic messages for good code
const sarcasticMessages = [
  "☕ Meh… finally you did something right 😒",
  "😏 Wow… didn’t crash this time!",
  "👏 Congrats, your code is… okay, I guess."
];

// Function to check code status
function checkCompile(isCodeOkay) {
  if (!isCodeOkay) {
    // pick random angry message
    const msg = angryMessages[Math.floor(Math.random() * angryMessages.length)];
    console.log(msg);
  } else {
    // pick random sarcastic message
    const msg = sarcasticMessages[Math.floor(Math.random() * sarcasticMessages.length)];
    console.log(msg);
  }
}

// Export it so it can be used in other projects
module.exports = { checkCompile };

// ----------------------------
// Example usage
// Change this to true or false to see different outputs
const codeIsOkay = false;

checkCompile(codeIsOkay);
