// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.


const basicOp = (action,n1,n2) => {
    switch (action){
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '*': return n1 * n2
        case '/': return n1 / n2
    }
}

console.log(' summation: ')
console.log('expected: 11, got: ',basicOp('+', 4, 7)) 
console.log(' subtraction: ')
console.log('expected: -3, got: ',basicOp('-', 15, 18)) 
console.log(' multiplicatin: ')
console.log('expected: 25, got: ',basicOp('*', 5, 5)) 
console.log(' division: ')
console.log('expected: 7, got: ',basicOp('/', 49, 7)) 