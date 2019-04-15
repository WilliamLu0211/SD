# William Lu
# SoftDev2 pd7
# K18 -- ??????????
# 2019-04-16 T

def pyTriples(n):
    return [[a, b, c]
            for a in range(1, n)
            for b in range(a, n)
            for c in range(b, n)
            if a**2 + b**2 == c**2]

def quickSort(arr):
    if len(arr) == 0:
        return []
    return quickSort( [x for x in arr[1:] if x <= arr[0]] ) + [arr[0]] + quickSort( [x for x in arr if x > arr[0]] )

print(pyTriples(50))
print(quickSort([7, 1, 5, 12, 3, 9, 15 ,60, 1]))
