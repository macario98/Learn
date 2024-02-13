package main

import "fmt"

func Range(n int) []int {
	r := []int{}
	for i := 0; i < n; i++ {
		r = append(r, i)
	}

	return r
}

func main() {
	fmt.Println(Range(-1))
	fmt.Println(Range(0))
	fmt.Println(Range(10))
}
