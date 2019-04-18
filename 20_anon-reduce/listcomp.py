# William Lu, Qian Zhou
# SoftDev2 pd7
# K20 -- Reductio ad Absurdum
# 2019-04-18 R

from functools import reduce

f = open('book.txt', 'r')
text = f.read().replace('.', ' ').replace(',', ' ').replace('"', ' ').replace(';', ' ').replace('?', ' ').replace('!', ' ').replace(':', ' ')
wordList = text.split()

def getFrequency(word):
    # print(l)
    l = [0] + wordList
    return reduce((lambda x, y: x + 1 if y == word else x), l)

def totalFrequency(words):
    frequencies = [getFrequency(x) for x in words]
    # print(frequencies)
    return reduce((lambda x, y: x + y), frequencies)

def mostFrequency():
    l = [{}] + wordList
    def modify(d, word):
        if word in d:
            d[word] += 1
        else:
            d[word] = 1
        return d
    d = reduce(modify, l)
    return max(d, key=d.get)

print(getFrequency('the'))
print(getFrequency('you'))

print(totalFrequency(['the', 'you']))

print(mostFrequency())
