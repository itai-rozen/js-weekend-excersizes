// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const repeat_str = (n,str) => str.repeat(n)

console.log('expected: YoYoYo. got:',repeat_str(3,'Yo'))