# William Lu
# SoftDev2 pd7
# K16 -- Do You Even List?
# 2019-04-12 F

def meets_min(password):
    UC = "QWERTYUIOPASDFGHJKLZXCVBNM"
    LC = "qwertyuiopasdfghjklzxcvbnm"
    NUM = "0123456789"
    l =     [0 if c in UC
        else 1 if c in LC
        else 2 if c in NUM
        else 3
        for c in password]
    # print(l)
    return 0 in l and 1 in l and 2 in l

def get_score(password):
    UC = "QWERTYUIOPASDFGHJKLZXCVBNM"
    LC = "qwertyuiopasdfghjklzxcvbnm"
    NUM = "0123456789"
    SYM = ".?!&#,;:-_*"
    l =     [0 if c in UC
        else 1 if c in LC
        else 2 if c in NUM
        else 3 if c in SYM
        else 4
        for c in password]
    # print(l)
    return 2 * ((len(l) >= 5) + (0 in l) + (1 in l) + (2 in l) + (3 in l))

print(meets_min("pentakill123")) #F
print(meets_min("Pentakill123")) #T

print(get_score("pentakill123")) #2
print(get_score(""))
print(get_score("Pentakill123,./"))#10
