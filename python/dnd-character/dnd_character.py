import random
import math

class Character:
    def __init__(self):
        self.strength = self.ability()
        self.dexterity = self.ability()
        self.constitution = self.ability()
        self.intelligence = self.ability()
        self.wisdom = self.ability()
        self.charisma = self.ability()
        self.hitpoints = 10 + modifier(self.constitution)
    
    def ability(self):
        r = [random.randint(1, 6) for i in range(0, 4)]
        r.sort()
        r.pop(0)
        return sum(r)
        
            
        


def modifier(num):
    return math.floor((num - 10) / 2)

