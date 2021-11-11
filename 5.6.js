// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

const maskify = str => {
    let maskLength = str.slice(0, str.length-4).length
    return `${'#'.repeat(maskLength) + str.slice(str.length-4)} `
}
let password = '12345678'
console.log('original password: ',password)
console.log('password after maskifying: ',maskify(password))