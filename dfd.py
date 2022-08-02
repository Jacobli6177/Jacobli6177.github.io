import random

NUMBER = random.randint(1, 99)
GUESS = None
TRY = 0
RUNNING = True

while RUNNING:
    if TRY == 7:
        print("The secret number is " + str(NUMBER))
    GUESS = input("Enter a number: ")
    if int(GUESS) < NUMBER:
        print("Your number is too low")
    elif int(GUESS) > NUMBER:
        print("Your number is too high")
    elif int(GUESS) == NUMBER:
        print("Great")
        if TRY < 2:
            print("Impressive, only %s tries." % str(TRY))
        elif TRY > 2 and TRY < 7:
            print("You guessed the secret number in %s guesses." % str(TRY))
        RUNNING = False
    TRY += 1
