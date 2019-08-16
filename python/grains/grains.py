def square(number):
    if(number <= 0 or number > 64): 
        raise ValueError(".+")
    return 2 ** (number - 1)


def total(number):
    if(number <= 0 or number > 64): 
        raise ValueError(".+")
    sum = 0
    i = 1
    acc = 1
    while(i <= number):
        sum += acc
        acc *= 2
        i += 1
    return sum