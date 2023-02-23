import { userByUserNameAndPassword } from "./src.js"
const btnLogIn = document.getElementById('btn-login')
btnLogIn.addEventListener('click', login)

async function login () {
    const userName = document.getElementById('input-userName').value
    const password = document.getElementById('input-password').value

    document.getElementById('input-userName').classList.remove('border')
    document.getElementById('input-password').classList.remove('border')
    
    if(userName == '' || password == '') {
        if(userName == '') {
            document.getElementById('input-userName').classList.add('border')
        }
        if(password == '') {
            document.getElementById('input-password').classList.add('border')
        }
        alert('Niste popunili sva polja!')
        return
    }
    const user = await userByUserNameAndPassword(userName, password)
    if(user.length == 0) {
        alert('Uneti podaci nisu tacni!')
        return
    } else {
        if(user[0].admin == true) {
            window.open(`admin.html?id=${user[0].id}`)
        }
        if(user[0].admin == false) {
            window.open(`user.html?id=${user[0].id}`)
        }
    }
}