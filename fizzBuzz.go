package main

import "fmt"

func print[T any](s T) {
	fmt.Println(s)
}

func fizzBuzz(lLow int, lUpp int, f func(n string)) []string {
	r := []string{}
	nFizz, nBuzz := 3, 5
	strFizz, strBuzz := "fizz", "buzz"

	for i := 0; i < lUpp; i++ {
		isFizz := i%nFizz == 0
		isBuzz := i%nBuzz == 0

		if isFizz {
			r = append(r, strFizz)
		} else if isBuzz {
			r = append(r, strBuzz)
		} else if isFizz && isBuzz {
			r = append(r, strFizz+strBuzz)
		} else {
			r = append(r, fmt.Sprint(i))
		}

		f(r[i])
	}

	return r
}

func main() {
	fmt.Println("hello world")
	r := fizzBuzz(0, 101, print)

	print(fmt.Sprint(r))
	print(fmt.Sprintf("%v", r))
	print(fmt.Sprintf("%+q", r))
}
