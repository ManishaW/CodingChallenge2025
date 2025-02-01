/* Mystery #4 - The Living Library
============================================================
At first I thought I had to paste the code "rbrggbrrbr" at the right time, but that didn't work- That would have been too easy!
Then I realized I had to screen capture the whole screen and find the colors of all of the books, in the right order.
*/

// NPM Imports
import jsautogui from "jsautogui";
let { mouse, keyboard } = jsautogui;
let screenshot = require('screenshot-desktop');

/* HELPER FUNCTIONS */
// Delay function - the mouse and keyboard don't like being used too fast!
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function to find the mouse position
console.log(mouse.position.x, mouse.position.y)

/* LET'S ROCK */
// Start by creating a canvas
const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(1920, 1080);
const ctx = canvas.getContext('2d');

// Let's get the list of displays
screenshot.listDisplays().then(async (displays) => {
    // Select the correct display and save the screenshot of it locally, easier than messing with a buffer.
    screenshot({ filename: './screenshot.png', screen: displays[0].id }).then(async () => {

        // Load and draw the image to canvas
        loadImage('./screenshot.png').then(async (image) => {
            ctx.drawImage(image, 0, 0, 1920, 1080);

            // There are 15 colors I need to find
            let colors = [];
            let amount = 15; // Number of books
            let count = 0;
            let startPosition = [1000, 540]; // Starting position of the first book
            let distance = 60; // Distance between each book on my screen, I had the webpage smaller.

            while (count < amount) {

                // Get the RGBA pixel color [0-255, 0-255, 0-255, 0-255]
                let pixelColor = ctx.getImageData(startPosition[0] + count * distance, startPosition[1], 1, 1).data;

                let color = '';
                // Check which is higher, R, G or B
                if(pixelColor[0] > pixelColor[1] && pixelColor[0] > pixelColor[2]) {
                    color = 'R';
                } else if(pixelColor[1] > pixelColor[0] && pixelColor[1] > pixelColor[2]) {
                    color = 'G';
                } else if(pixelColor[2] > pixelColor[0] && pixelColor[2] > pixelColor[1]) {
                    color = 'B';
                } else {
                    color = 'None';
                }

                await delay(10);
                colors.push(color);
                // Print the pixel color, just for debugging
                console.log(color, pixelColor[0], pixelColor[1], pixelColor[2]);
                count++;
                await delay(10);
            }

            // Move the mouse to the input field...
            mouse.setPosition(1490, 660)
            await delay(10);

            // Click on the input field
            mouse.down("left")
            await delay(10);

            // Write the password!
            keyboard.write(colors.join(''));
            await delay(10);
            keyboard.press("enter");
            await delay(10);

            console.log("Password: " + colors.join(''));
            console.log("Finished! :)");
        });          
    });
});
