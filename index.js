let passwordLength = document.getElementById('PasswordLenght')
let password = document.getElementById('password')
let saveButton = document.getElementById("saveButton")

const generatePassword = (len) => {
const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const uppeerAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numeric = '0123456789'
const symbol = "!@#$%^&*()_;:<>,./?-+="

const data = lowerAlphabet + uppeerAlphabet + numeric +symbol
let generator = '';
for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
}

return generator
}
const  getpassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() =>{ 
        alert('password udah ada')
    },1000  )
}
const savePassword = () => {
document.title = password.value
saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya :  ${document.title}`))
saveButton.setAttribute("download", "myPasswordGeneratorLOG.txt")
setTimeout (() => {
    alert('berhasil disimpan')
}, 1000)
}