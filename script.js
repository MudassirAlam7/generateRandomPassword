let passwordBox = document.getElementById('password')
let btn = document.querySelector('#button')
let copy = document.getElementById('copy')


let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower = "abcdefghijklmnopqrstuvwxyz"
let num = "0123456789"
let symbol = "!#@$%^&*()~/-*+.><?/|}{[]"
let length = 12
let char = upper + lower + num + symbol
function genratepassword(){
    let password = ""
    while(length>password.length){
        password += char[Math.floor(Math.random()*char.length)]
    }
    passwordBox.value = password
}
btn.addEventListener('click', genratepassword)  

// function copyPassword(){
//     passwordBox.select();
//     document.execCommand('copy')
// }



function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}
copy.addEventListener('click', copyPassword)
