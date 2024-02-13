package main

import "fmt"

func Range(n int) []int {
	if n <= 0 {
		return []int{}
	}
	n--
	return append(Range(n), n)
}

func main() {
	fmt.Println(Range(-1))
	fmt.Println(Range(0))
	fmt.Println(Range(10))
}
