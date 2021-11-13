// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
// Ex2.2
let array = [19, 5, 1, 2, 77]
const getSmallestNumsSum = arr => {
    let sortedArr =  arr.sort((a,b) => a-b) 
    let [a,b] = sortedArr
    console.log('first smaleest num: ',a)
    console.log('second smaleest num: ',b)
    return a+b
}
console.log('sum of 2 smallest nums: ',getSmallestNumsSum(array))


