import re
def is_valid(isbn):
    if re.match(r'^\d{1}-*\d{3}-*\d{5}-*[\dX]{1}$', isbn) == None:
        return False
    
    isbn = re.sub(r'-', "", isbn)
    sum = 0
    start = 10
    for i in range(0, len(isbn)):
        sum = sum + start * 10 if isbn[i] == "X" else sum + start * int(isbn[i])
        start -= 1

    return sum % 11 == 0