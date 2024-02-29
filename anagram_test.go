package learn

import (
	"testing"
)

func TestAnagram(t *testing.T) {

	testCases := []struct {
		Name     string
		strA     string
		strB     string
		Expected bool
	}{
		{
			Name:     "Same Word",
			strA:     "abc",
			strB:     "AbC",
			Expected: false,
		},
		{
			Name:     "Is Anagram",
			strA:     "abc",
			strB:     "CBa",
			Expected: true,
		},
		{
			Name:     "Different Length",
			strA:     "abc",
			strB:     "bCAd",
			Expected: false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.Name, func(t *testing.T) {
			result := isAnagram(tc.strA, tc.strB)

			if result != tc.Expected {
				t.Errorf("Result Incorrect, got: %d, want: %d", result, tc.Expected)
			}
		})
	}
}
