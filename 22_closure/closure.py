# William Lu
# SoftDev2 pd7
# K22 -- Closure
# 2019-05-01 W

def repeat(s):
    def freq(n):
        return s * n
    return freq

r1 = repeat('hello')
r2 = repeat('goodbye')

print(r1(2))
print(r2(2))

print(repeat('cool')(3))

def outer():
    x = 'foo'
    def inner():
        nonlocal x
        x = 'bar'
    inner()
    return x

print(outer())

def make_counter():
    ctr = 0
    def inc():
        nonlocal ctr
        ctr += 1
        return ctr
    def acc():
        nonlocal ctr
        return ctr
    return {'increment':inc, 'display':acc};

ctr1 = make_counter()
print(ctr1['increment']())
print(ctr1['increment']())

ctr2 = make_counter()
print(ctr2['increment']())
print(ctr1['increment']())
print(ctr2['increment']())

print(ctr1['display']())
print(ctr2['display']())
