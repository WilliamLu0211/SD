# William Lu
# SoftDev2 pd7
# K23 -- Memoize
# 2019-05-02 R

# import random
#
# def heading(f):
#     def inner():
#         return '<h1>' + f() + '</h1>'
#     return inner
#
# # greet = heading(greet)
# @heading
# def greet():
#     greetings = ['Hello', 'Welcome', 'Whalecome', 'Welcum']
#     return random.choice(greetings)
#
# print(greet())

def memo(f):
    m = {}
    def helper(x):
        if x not in m:
            m[x] = f(x)
        return m[x]
    return helper

#fib = memo(fib)
@memo
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

# fib = memo(fib)
print(fib(6))
