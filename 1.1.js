const yesOrNo = bool => (bool) ? 'Yes' : 'No'

console.log('expected: "Yes" : ',yesOrNo(true))
console.log('expected: "No" : ',yesOrNo(false))