def slices(series, length):

    l = len(series)
    if length > l or length <= 0:
        raise ValueError(".+")

    result = []
    i = 0
    while(i <= l - length):
        result.append(series[i:i+length])
        i +=1

    return result
