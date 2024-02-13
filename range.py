def Range(n=0):
    print(n)
    if (n<=0):
        return []
    n -= 1#n--
    r = Range(n)
    r.append(n)

    return r

print(Range(-1))
print(Range(0))
print(Range(10))