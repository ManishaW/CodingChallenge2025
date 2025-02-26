# The Vault of a Thousand Keys

#Move the curser to the top-left corner of your screen to exit the program.

import pyautogui

MAX_PASS_LEN = 6

def filterText(filename):
    lines = []
    with open(filename, 'r', errors = 'replace') as file:
        for i, line in enumerate(file):
            if len(line.strip()) <= MAX_PASS_LEN:
                lines.append(line.strip())
    return lines

def makeGuess(passwords):
    for guess in passwords:
        pyautogui.typewrite(guess + '\n')

pyautogui.alert('Press OK once the cursor is in position for the BrutePassword program.')
passwords = filterText('rockyou.txt')
makeGuess(passwords)