# The Reader's Code

#Made as just a tool to help me decypher the below 'text'.

CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
translatedText = ''
text = 'FWUG UG GSVW P WPEN VUBWRE FH VEPVM. UO JHS VPI ERPN FWUG JHS NUN YREJ \
ARXX! JHS APIF FH MIHA FWR GHXSFUHI? DPJLR U AUXX FRXX JHS. WPYR JHS FEURN \
EUCWF VXUVMUIC FWR DPCIUOJUIC CXPGG OHSE FUDRG? AWJ NUN JHS RYRI LHFWRE NRVUBWREUIC \
FWUG, UF UG GH HLYUHSG!'

RED = '\033[31m'
RESET = '\033[0m'

key = {
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z'
}

def printMessages():
    for char in key:
        if char == key[char]:
            print(char + ' -> ' + key[char])
        else:
            print(RED+ char + ' -> ' + key[char] + RESET)
    print('----------------------------------------------------------------------')
    print('\nO Text: ' + text + '\n')
    print('T Text: ' + translatedText + '\n')

def getReplacements():
    replaceList = []
    firstInput = ''
    secondInput = ''
    while True:
        replaceString = input('Type the letter you want to replace and \
what you\'d like to replace it with (or "sort" to see the translated words in length order) \n').upper()
        if replaceString == 'SORT':
            printSorted()
            continue
        firstInput = replaceString[0]
        secondInput = replaceString[-1]
        if firstInput in CHARACTERS:
            if secondInput in CHARACTERS:
                break
    replaceList.append(firstInput)
    replaceList.append(secondInput)
    return replaceList

def updateKey(replaceList):
    letterToReplace = replaceList[0]
    replacementLetter = replaceList[1]
    key[letterToReplace] = replacementLetter

def translateText():
    index = 0
    newText = text
    for char in newText:
        if char in CHARACTERS:
            newText = newText[:index] + key[char] + newText[index + 1:]
        index += 1
    return newText

def printSorted():
    print('\n')
    textList = translatedText.split()
    sortedText = sorted(textList, key = len)
    for i in range(0, len(sortedText)):
        for char in range(0, len(sortedText[i])):
            if sortedText[i][char] not in CHARACTERS:
                sortedText[i] = sortedText[i][:char] + sortedText[i][char + 1:]
        print(sortedText[i])
    print('\n')

while True:
    printMessages()
    updateKey(getReplacements())
    translatedText = translateText()
    # if not input('Y to continue, N to exit:\n').lower().startswith('y'):
    #     break
