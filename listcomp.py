from functools import reduce

def add(x, y):
    if y == word:
        

def getFrequency(word):
    f = open('short.txt', 'r')
    text = f.read().replace('.', ' ').replace(',', ' ').replace('"', ' ').replace(';', ' ').replace('?', ' ').replace('!', ' ').replace(':', ' ')
    l = text.split()
    print(l)
    return reduce((lambda x, y: x + 1 if y == word), l)

print(getFrequency('cities'))
