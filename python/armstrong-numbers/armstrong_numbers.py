import math

def is_armstrong_number(number):
    l = len(str(number))
    sum = 0
    aux = number

    while aux > 0:
        sum += (aux % 10) ** l
        aux = math.floor(aux / 10)

    return sum == number
    
