import { regUser } from "./src.js";

const btnSingUp = document.getElementById('btn-singup')
btnSingUp.addEventListener('click', registration)


async function registration () {
    const firstName = document.getElementById('input-firstName').value
    const lastName = document.getElementById('input-lastName').value
    const userName = document.getElementById('input-userName').value
    const password = document.getElementById('input-password').value
    const adress = document.getElementById('input-adress').value
    const phoneNumber = document.getElementById('input-phoneNumber').value
    const genderTest = document.getElementById('input-gender').checked
    let gender
    if(genderTest == true) {
        gender = 'M'
    } else {
        gender = 'F'
    }
    const admin = document.getElementById('input-admin').checked

    document.getElementById('input-firstName').classList.remove('border')
    document.getElementById('input-lastName').classList.remove('border')
    document.getElementById('input-userName').classList.remove('border')
    document.getElementById('input-password').classList.remove('border')
    document.getElementById('input-adress').classList.remove('border')
    document.getElementById('input-phoneNumber').classList.remove('border')
    document.getElementById('input-gender').classList.remove('border')


    if(firstName == '' || lastName == '' || userName == '' || password == '' || adress == '' || phoneNumber == '' || genderTest == false) {
        if(firstName == '') {
            document.getElementById('input-firstName').classList.add('border')
        }
        if(lastName == '') {
            document.getElementById('input-lastName').classList.add('border')
        }
        if(userName == '') {
            document.getElementById('input-userName').classList.add('border')
        }
        if(password == '') {
            document.getElementById('input-password').classList.add('border')
        }
        if(adress == '') {
            document.getElementById('input-adress').classList.add('border')
        }
        if(phoneNumber == '') {
            document.getElementById('input-phoneNumber').classList.add('border')
        }
        if(genderTest == '') {
            document.getElementById('input-gender').classList.add('border')
        }
        alert ('Niste popunili sva polja!')
        return  
    }
    const user = await regUser(firstName, lastName, userName, password, adress, phoneNumber, gender, admin)
    window.open(`user.html?=${user.id}`)
}
