import random
import string

class Robot(object):
    def __init__(self):
        self.name = ''.join(random.choice(string.ascii_uppercase) for _ in range(2)) + ''.join(random.choice(string.digits) for _ in range(3))
    def reset(self):
        name = self.name
        while(name == self.name):
            self.name = "".join(random.choice(string.ascii_uppercase) for _ in range(2)) + "".join(random.choice(string.digits) for _ in range(3))

        