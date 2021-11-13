// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

const findUnique = arr => {
    // array has less than 3 numbers? GTFO
    if (arr.length < 3) return 'invalid array'
    const numbersMap = {}
    for (num of arr){
        if (numbersMap[num]) numbersMap[num]++
        else numbersMap[num] = 1
    }
    let uniqueNum
    for (k in numbersMap){
        if (numbersMap[k] === 1) return k 
    }
    return 'no unique num'
}
const array1 = [ 1, 1, 1, 2, 1, 1 ]
const array2 = [ 0, 0, 0.55, 0, 0 ]
console.log('expected: 2. got: ',findUnique(array1))
console.log('expected: 0.55. got: ',findUnique(array2))