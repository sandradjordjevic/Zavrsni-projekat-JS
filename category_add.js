import { addCategory } from "./src.js";

const search = window.location.search
const parts = search.split('=')
const id = parts[1]

const btnAdd = document.getElementById('btn-add')
btnAdd.addEventListener('click', add)
async function add () {
    const name = document.getElementById('input-name').value
    const image = document.getElementById('input-image').value

    document.getElementById('input-name').classList.remove('border')
    document.getElementById('input-image').classList.remove('border')

    if(name == '' || image == '') {
        if(name == '') {
            document.getElementById('input-name').classList.add('border')
        }
        if(image == '') {
            document.getElementById('input-image').classList.add('border')
        }
        alert('Niste popunili sva polja!')
        return
    }
    await addCategory(name, image)    
    window.open(`admin.html?id=${id}`)
}