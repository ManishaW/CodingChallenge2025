# The Living Library

#Made for my specific monitor and specific placement of the game window.

import pyautogui

#this function not used
def takeScreenShot(left, top, width, height):
    im1 = pyautogui.screenshot(region=(left, top, width, height))
    im1.show()

pyautogui.alert('Press ok once the cursor is in position for the Living Library program.')

click1 = (727, 1048)
click2 = (3061, 1422)
left = click1[0]
top = click1[1]
width = click2[0] - click1[0]
height = click2[1] - click1[1]
midLeft = (left, top + height/2)
distBtwSections = width/15
distToMid = distBtwSections/2

# takeScreenShot(left, top, width, height)

colorString = ''

for cards in range(0, 15):
    centerGlobalx = left + distToMid + cards*distBtwSections
    centerGlobaly = midLeft[1]
    color = pyautogui.pixel(int(centerGlobalx), int(centerGlobaly))
    if color[2] <= 72:
        colorString += 'r'
    elif 72 < color[2] <= 100:
        colorString += 'g'
    else:
        colorString += 'b'

pyautogui.typewrite(colorString + '\n')