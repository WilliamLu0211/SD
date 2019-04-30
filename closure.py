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
    return inc

ctr1 = make_counter()
print(ctr1())
print(ctr1())

ctr2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())
