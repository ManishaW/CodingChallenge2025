/* Mystery #1 - The Shifting Script 
============================================================
For the first puzzle, we have a note with jumbled text reading...
"WFCWE NBY WLIWIXCFY NBLYY NCGYM QBCFY JLYMMCHA NBY D EYS"

On first glance it looks like alphabet is offset, and "NBY" must be the word "THE".
Let's put my theory to the test!
*/

let inputText = "WFCWE NBY WLIWIXCFY NBLYY NCGYM QBCFY JLYMMCHA NBY D EYS";

// Let's start with a simple function that takes in the text and the shift amount...
function letterShift(cipheredText, amount = 0) {
  let decipheredText = "";
  let charCodes = [];

  // For each character in the text
  for (let i = 0; i < cipheredText.length; i++) {    
    // Get the Unicode code of the character
    let charCode = cipheredText.charCodeAt(i);
  
    // If the character is a letter
    if (charCode >= 65 && charCode <= 90) {
      // Wrap around the alphabet if necessary
      if (charCode + amount > 90) {
        charCodes.push(charCode + amount - 26);
      // For negative shift - we don't really need this, added anyway :P
      } else if (charCode + amount < 65) {
        charCodes.push(charCode + amount + 26);
      } else {
        charCodes.push(charCode + amount);
      }
    } else {
      // If the character is not a letter just add it to the array
      charCodes.push(charCode);
    }
  }
  
  // Convert the character unicodes back to characters
  for (let i = 0; i < charCodes.length; i++) {
    let char = String.fromCharCode(charCodes[i]);
    decipheredText += char;
  }
   
  return decipheredText;
}

// Generate all possible shift values, only need to check 1 - 25
for (let i = 1; i < 26; i++) {
  let result = letterShift(inputText, i);
  console.log(result);
}
