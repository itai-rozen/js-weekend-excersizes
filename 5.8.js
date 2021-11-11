// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

const getLongestWord = str => {
    let maxLength = 0
    let longestWord = ''
    str.split(' ').forEach(word => {
        if (word.length > maxLength){
            maxLength = word.length
            longestWord = word
        }
    })
    return longestWord
}

let sentence2 = 'what is the longest word length in this sentence ? i bet its sentence'
console.log(sentence2)
console.log('longest word length: ',getLongestWord(sentence2))
sentence2 = 'in this sentence its gonna be encyclopedia'
console.log(sentence2)
console.log('longest word length: ',getLongestWord(sentence2))