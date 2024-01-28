/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function sortAlphabetically(str){
    return str.split("").sort().join()
}

function isAnagram(strA = "", strB){
    let lowStrA = strA.toLowerCase()//toLowerCase not affects original
    let lowStrB = strB.toLowerCase()

    if (lowStrA == lowStrB){
        return false
    }

    let sortedA = sortAlphabetically(lowStrA)
    let sortedB = sortAlphabetically(lowStrB)

    return sortedA == sortedB
}

console.log(isAnagram("abc", "AbC"))
console.log(isAnagram("abc", "CBa"))
console.log(isAnagram("abc", "bCAd"))

/**
isAnagram("abc", "AbC")
isAnagram("abc", "CBa")
isAnagram("abc", "bCAd")
 */