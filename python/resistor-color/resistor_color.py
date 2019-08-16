def color_code(color):
    c = colors()
    for i in range(0, len(c)):
        if(c[i] == color):
            return i


def colors():
    return ['black','brown','red','orange','yellow','green','blue','violet','grey','white']
