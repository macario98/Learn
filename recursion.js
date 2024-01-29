function countUp(maxNumber=10){
    if(maxNumber<=0)
        return []

    const countArray = countUp(maxNumber-1)
    countArray.push(maxNumber), countArray//countArray = [...countNumber, maxNumber]
    return countArray
}

print("countUp", countUp(10))

function countDown(maxNumber=10){
    if(maxNumber<=0)
        return []

    let countArray = countDown(maxNumber-1)
    countArray=[maxNumber,...countArray]

    return countArray
}

print(countDown(-1))
print(countDown(10))
print(countDown(5))

// #TODO
//multiply the first n elements of an array
function multiplyFirst(arr, n){
  let product = 1
  for (let i = 0; i<n; i++){
    product*=arr[i]
  }
  return product
}

//[1,2,3], 2 >> 1*2 = 2
//1 >> 1
//0 >> 0
//[0,3,2,1], 1 >> 0

print("mULTIPLY FIRST")
print(multiplyFirst([1,2,3], 2))
print(multiplyFirst([1,2,3], 1))
print(multiplyFirst([1,2,3], 0))
print(multiplyFirst([0,3,2,1], 1))

/**
 * Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }


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


function range(n=0){
  print("param:", n)
  if (n == 0){
      print("if:", n)
      return [n]
  }

  r = range(n-1)

  r.push(n)
  print("returning...", r)

  return r
}

function range2(start=0, end=0){
}

print(range(10))

function print(...e){
  console.log(...e)
}