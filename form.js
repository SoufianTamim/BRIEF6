let first_name = document.getElementById('first_name')
let last_name = document.getElementById('last_name')
let email = document.getElementById('email')
// let phone = document.getElementById('phone')
let gender = document.getElementById('gender')
let group = document.getElementById('group')// =========I should give the html element an Id========= //
let clubs = document.getElementById('clubs')


let phone = "0677846064"
let phoneRe = /0[5-7]/g;  
console.log(phone.match(phoneRe));