"""
This exercise stub and the test suite contain several enumerated constants.

Since Python 2 does not have the enum module, the idiomatic way to write
enumerated constants has traditionally been a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""


# Score categories.
# Change the values as you see fit.
YACHT = 50
ONES = 1
TWOS = 2
THREES = 3
FOURS = 4
FIVES = 5
SIXES = 6
FULL_HOUSE = None
FOUR_OF_A_KIND = None
LITTLE_STRAIGHT = 30
BIG_STRAIGHT = 30
CHOICE = None


def score(dice, category):
    result = howManyElements(dice)
    if category == ONES:
        print("estoy en ones")
    pass

def howManyElements(dice):
    result = [0, 0, 0, 0, 0, 0]
    for i in range(0, len(dice)):
        result[dice[i] - 1] += 1
    return result

print(score([1,2,3,4,5,6], ONES))