package main

import (
	"fmt"
	"sort"
	"strings"
)

func sortAlphabeticallY(str string) string {
	chars := []rune(str)
	sort.Slice(chars, func(i, j int) bool { //Mutable
		return chars[i] < chars[j]
	})

	return string(chars)
}

func isAnagram(strA, strB string) bool {
	lowStrA := strings.ToLower(strA) //Inmutable funtion
	lowStrB := strings.ToLower(strB)

	if lowStrA == lowStrB {
		return false
	}

	sortedA := sortAlphabeticallY(lowStrA)
	sortedB := sortAlphabeticallY(lowStrB)

	return sortedA == sortedB
}

func main() {
	fmt.Println(isAnagram("abc", "AbC"))
	fmt.Println(isAnagram("abc", "CBa"))
	fmt.Println(isAnagram("abc", "bCAd"))
}
