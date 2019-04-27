# William Lu, Qian Zhou
# SoftDev2 pd7
# K20 -- Reductio ad Absurdum
# 2019-04-29 M

from functools import reduce

f = open('book.txt', 'r')
text = f.read().lower()

cleaner = text.replace('.', ' ')\
              .replace(',', ' ')\
              .replace('"', ' ')\
              .replace(';', ' ')\
              .replace('?', ' ')\
              .replace('!', ' ')\
              .replace(':', ' ')\
              .replace('(', ' ')\
              .replace(')', ' ')

wordList = cleaner.split()
# charList = list(text)

def getFrequency(word):
    # print(l)
    l = [0] + wordList
    return reduce((lambda x, y: x + 1 if y == word else x), l)

def totalFrequency(words):
    inputList = words.lower().split()
    print(inputList)
    numWords = len(inputList)
    wordGroups = [0] + [[wordList[j] for j in range(i, i + numWords)] for i in range(len(wordList) - numWords + 1)]
    print(wordGroups)
    return reduce((lambda x, y: x + 1 if y == inputList else x), wordGroups)


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

print(totalFrequency('this ebook'))

print(mostFrequency())
