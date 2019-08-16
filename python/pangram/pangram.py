import re

def is_pangram(sentence):
    letters = set()
    sentence = sentence.lower()
    sentence = re.sub('[^a-z]', "", sentence)

    for i in range(0, len(sentence)):
        letters.add(sentence[i])
    
    return len(letters) == 26
