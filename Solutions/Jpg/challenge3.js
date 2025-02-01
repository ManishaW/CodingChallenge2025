/* Mystery #3 - The Reader's Code
============================================================
My initial thought is that this puzzle is similar to the first challenge, but with a different cipher technique-
Maybe a cipher where each letter in the alphabet is replaced with a specific letter?

The trick is I have figure it out one letter at a time.
I took a sudoku type approach and started with one letter words, then the two letter words, and so on, until it was easy to decipher by hand.

I had to build an easy-to-use function that would help me decipher it.
*/

// Formatted it to make it easier to decipher.
let inputText = `KARJ RJ JXUA I AICG URNAPC KL UCIUW. 
RV FLX UIH CPIG KARJ FLX GRG DPCF SPZZ!
FLX SIHK KL WHLS KAP JLZXKRLH? 
YIFTP R SRZZ KPZZ FLX.
AIDP FLX KCRPG CRQAK UZRUWRHQ KAP YIQHRVFRHQ QZIJJ VLXC KRYPJ?
SAF GRG FLX PDPH TLKAPC GPURNAPCRHQ KARJ, RK RJ JL LTDRLXJ!`

// Setup some variables for the cipher
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let cipher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to replace a letter in the cipher which would be used later
function replaceCipherLetter(originalLetter, cipherLetter) {
  let index = letters.indexOf(originalLetter);
  let newcipher = cipher;
  newcipher = newcipher.slice(0, index) + cipherLetter + newcipher.slice(index + 1);
  cipher = newcipher;
}


// LET'S ROCK!
// First we start with one letter words
// If you look at the original text, I deduced that "I" will probably be "A", so "R" must probably be "I"
replaceCipherLetter("I", "A");
replaceCipherLetter("R", "I");

// Then we go to two letter words
// List of all two letter words: of, to, in, it, is, be, as, at, so, we, he, by, or, on, do, if, me, my, up, an, go, no, us, am
// The ones that share common letters in the original text are RK, RJ, RV
// I have three options...
// or, of, on
// in, it, is, if
// an, as, at
// But since R is I then RK, RJ, RV must be in, it, is, if
replaceCipherLetter("R", "I"); // Repeat of before...
replaceCipherLetter("K", "T"); // RK is IT
replaceCipherLetter("J", "S"); // RJ is IS
replaceCipherLetter("V", "F"); // RV is IF
replaceCipherLetter("L", "O"); // JL IS SO

// Then Instead of Two Letter Words, I noticed a ? maybe 
// Who, what, where, when, why, how
// Is FLX from the original text: who, why or how?
// No, it must YOU, "If you" and "have you"
replaceCipherLetter("F", "Y");
replaceCipherLetter("L", "O");
replaceCipherLetter("X", "U");

// Now most of the key letters are easily solved now, I can manually deduce the rest
replaceCipherLetter("A", "H");
replaceCipherLetter("P", "E");
replaceCipherLetter("Y", "M");
replaceCipherLetter("C", "R");
replaceCipherLetter("G", "D");
replaceCipherLetter("D", "V");
replaceCipherLetter("U", "C");
replaceCipherLetter("W", "K");
replaceCipherLetter("N", "P");
replaceCipherLetter("H", "N");
replaceCipherLetter("Z", "L");
replaceCipherLetter("S", "W");
replaceCipherLetter("T", "B");
replaceCipherLetter("Q", "G");

// Finally, decipher the text
let decipheredText = "";
for (let i = 0; i < inputText.length; i++) {
  const char = inputText[i];

  // Check if the character is a letter else add it to the deciphered text
  if (letters.includes(char)) {
    decipheredText += cipher[letters.indexOf(char)];
  } else {
    // Change linebreaks to spaces
    if (char === "\n") {
      decipheredText += " ";
    } else {
      decipheredText += char;
    }
  }
}

// Output the deciphered text
console.log("Deciphered Text: " + decipheredText);

// And that's it!
console.log(":)");
