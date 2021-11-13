// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:

// However, the arrays can have varying lengths, not just limited to 4.

const binaryToInteger = arr => {
    let binCoefficient = 1
    let sum = 0
    for (let i = arr.length-1; i >= 0; i--){
        sum += arr[i] * binCoefficient
        binCoefficient *= 2
    }
    return sum
}

const arr1 = [0, 0, 0, 1]
console.log('original array: ',arr1,'expected result:1. got: ',binaryToInteger(arr1))
let arr2 =  [0, 0, 1, 0]
console.log('original array: ',arr2,'expected result:2. got: ',binaryToInteger(arr2))
let arr3 =  [0, 1, 0, 1]
console.log('original array: ',arr3,'expected: result:5. got: ',binaryToInteger(arr3))
let arr4 =  [1, 0, 0, 1]
console.log('original array: ',arr4,'expected result:9. got: ',binaryToInteger(arr4))
let arr5 = [1,0,0,0,0,0,1]
console.log('original array: ',arr5,'expected result:65. got: ',binaryToInteger(arr5))