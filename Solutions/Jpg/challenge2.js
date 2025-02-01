/* Mystery #2 - The Vault of A Thousand Keys
============================================================
This puzzle is a bit tricky. At first I thought the answer was somewhere in the note.
I was thinking maybe it was every X letter in the note... or what if I add up every letter? Maybe it's morse code?
But then I noticed the input field only allows for 6 characters, so I tried an typing all of 3-6 letter words one at a time.

That didn't work...

Then I read the description in the "Coding Challenge Details" section, and it mentioned "Brute Force" and setting up Pyautogui- I realized what I needed to do.
Instead of using Pyautogui, I used JSAutoGui, a javascript equivalent of Pyautogui.
6^26 = 30 million possibilities, so I don't think that's the right answer.
So I downloaded a bunch of wordlists for 3-6 letter words and wrote a script- but that failed too.
Then I got the most common password list, and viola, we got it!
*/

// NPM Imports
import jsautogui from "jsautogui";
let { mouse, keyboard } = jsautogui;

/* HELPER FUNCTIONS */
// We need a delay function, the mouse and keyboard don't like being used too fast
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Find mouse position (could have set a timer for this, but I manually set it)
console.log(mouse.position.x, mouse.position.y)

// Manually set the mouse to the input field
mouse.setPosition(1418, 641)
await delay(10);

// Click on the input field
mouse.down("left")
await delay(10);

// Load wordlist
let wordList = await Bun.file("./10k-most-common.txt").text();
let wordListArray = wordList.split("\n");

console.log("Going through the wordlist, this may take a while... don't click anything or move your mouse!")
delay(3000);

// Cycle through the wordlist
for (let i = 0; i < wordListArray.length; i++) {
    let password = wordListArray[i];
    keyboard.write(password);
    await delay(10);
    keyboard.press("enter");
    console.log("Password: " + password);
    await delay(10);
}

console.log("Finished going through the wordlist. You may now use your mouse and keyboard!")
