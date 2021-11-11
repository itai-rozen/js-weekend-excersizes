// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).

const toCamelCase = str => {
    let camelCasedStr = ''
    let strArr = str.split('_')
    for (word of strArr){ camelCasedStr += word.slice(0,1).toUpperCase() + word.slice(1)}
    return camelCasedStr
}
let underscoreStr = 'camel_case_me_please'
console.log('original string: ', underscoreStr)
console.log('string after camelCasing: ',toCamelCase(underscoreStr))