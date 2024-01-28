def isAnagram(strA:str, strB:str):
    lowStrA = strA.lower()
    lowStrB = strB.lower()

    if lowStrA == lowStrB:
        return False
    
    sortedA = "".join(sorted(lowStrA))
    sortedB = "".join(sorted(lowStrB))

    return sortedA == sortedB

print(isAnagram("abc", "AbC"))
print(isAnagram("abc", "CBa"))
print(isAnagram("abc", "bCAd"))