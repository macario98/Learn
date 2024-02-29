package learn

import (
	"fmt"
	"testing"
)

func TestFizzBuzz(t *testing.T) {
	result := fizzBuzz(0, 101, print)

	print(fmt.Sprint(result))
	print(fmt.Sprintf("%v", result))
	print(fmt.Sprintf("%+q", result))

}
