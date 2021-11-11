// The first century spans from the year 1 up to and including the year 100, The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.


const centuryFromYear = year => (year % 100 > 0)? Math.floor(year/100+1) : Math.floor(year/100)
console.log('expected: 18. got: ', centuryFromYear(1705))
console.log('expected: 19. got: ', centuryFromYear(1900))
console.log('expected: 20. got: ', centuryFromYear(2000))
console.log('expected: 17. got: ', centuryFromYear(1601))