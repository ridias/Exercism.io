import math

def score(x, y):
    pythagoras = math.sqrt((abs(x - 0) ** 2) + (abs(y - 0) ** 2))
    if pythagoras <= 1:
        return 10
    elif pythagoras <= 5:
        return 5
    elif pythagoras <= 10:
        return 1
    else:
        return 0
