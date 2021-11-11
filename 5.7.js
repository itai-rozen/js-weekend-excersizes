// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const getShortestWordLength = str => {
    let lengthsArr = str.split(' ').map(word => word.length)
    return Math.min(...lengthsArr)
}

let sentence = 'what is the shortest word length in this sentence? i bet its 1'
console.log(sentence)
console.log('shortest word length: ',getShortestWordLength(sentence))
sentence = 'in this sentence its gonna be two'
console.log(sentence)
console.log('shortest word length: ',getShortestWordLength(sentence))