// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.


const findNextSquare = num => {
    let squareNum = Math.sqrt(num)
    // square root of number is not an integer? GTFO
    if ( squareNum % (Math.floor(squareNum)) !== 0) return -1

    return (squareNum+1) ** 2
}

console.log('expected :144. got: ', findNextSquare(121))
console.log('expected :676. got: ', findNextSquare(625))
console.log('expected :-1. got: ', findNextSquare(114))
console.log('expected :64. got: ', findNextSquare(49))
