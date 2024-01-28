def fizzBuzz(lLow=0, lUpp=100, f=lambda n: print(n)):
    r = []
    nFizz, nBuzz = 3,5
    strFizz, strBuzz = "fizz", "buzz"

    for i in range(lLow, lUpp):
        isFizz = i % nFizz == 0
        isBuzz = i % nBuzz == 0
        if isFizz:
            r.append(strFizz)
        elif isBuzz:
            r.append(strBuzz)
        elif isFizz and isBuzz:
            r.append(strFizz+strBuzz)
        else:
            r.append(i)

        if callable(f):
            f(r[i])
    return r

r = fizzBuzz(lUpp=101)

print(r)