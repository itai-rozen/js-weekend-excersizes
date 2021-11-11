// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.

const getInitials = fullName => {
    let nameArr = fullName.toUpperCase().split(' ')
    return `${nameArr[0].charAt(0)}.${nameArr[1].charAt(0)}`
}

let myName = 'itai rozen'
console.log('name: ', myName)
console.log('intials: ',getInitials(myName))