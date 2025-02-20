# The Shifting Script

SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
NUM_SYMBOLS = len(SYMBOLS)

def getMessage():
    print("Enter the encrypted message")
    return input()

def shiftMessage(message, shift):
    shiftedMessage = ''
    for symbol in message:
        if symbol in SYMBOLS:
            index = SYMBOLS.find(symbol)
            index += shift
            if index >= NUM_SYMBOLS:
                index -= NUM_SYMBOLS
            shiftedMessage += SYMBOLS[index]
        else:
            shiftedMessage += symbol
    return shiftedMessage

message = getMessage().upper()

for i in range(1, NUM_SYMBOLS + 1):
    print(i, shiftMessage(message, i))
