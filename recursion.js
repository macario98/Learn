module.exports = { countUp, countDown,multiplyFirstLoop, multiplyFirst}

function countUp(maxNumber = 10) {
  if (maxNumber <= 0)
    return []

  const countArray = countUp(maxNumber - 1)
  countArray.push(maxNumber)//countArray = [...countNumber, maxNumber]
  return countArray
}

function countDown(maxNumber = 10) {
  if (maxNumber <= 0)
    return []

  let countArray = countDown(maxNumber - 1)
  countArray = [maxNumber, ...countArray]

  return countArray
}

// #TODO
//multiply the first n elements of an array
function multiplyFirstLoop(arr, n) {
  let product = 0
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {//FINAL RESULT: ZERO
      return product
    }
    if (i > 0) {
      product *= arr[i]
    } else {//FIRST ELEMENT
      product = arr[i]
    }
  }
  return product
}

//FREECODECAMP, FAILED WHEN n=0 OR n>arr.length
// function multiplyFirstLoop(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }


function multiplyFirst(arr, n) {
  if (arr[n] == 0) {
    return 0
  }

  if (n == 0) {
    return arr[n]
  }
  return multiplyFirst(arr, n - 1) * arr[n - 1]
} 

/*function multiplyFirst(arr, n) {//freecodecamp
  if (n <= 0) {
    return 1;
  } else {
    return multiplyFirst(arr, n - 1) * arr[n - 1];
  }
}*/

/**
 * Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

  


  However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }



  Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.


  function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
 */


function range(n = 0) {
  print("param:", n)
  if (n == 0) {
    print("if:", n)
    return [n]
  }

  r = range(n - 1)

  r.push(n)
  print("returning...", r)

  return r
}

function range2(start = 0, end = 0) {
}

print(range(10))

function print(...e) {
  console.log(...e)
}