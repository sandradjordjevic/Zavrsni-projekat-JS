import { addAd, allCategories } from "./src.js"

const search = window.location.search
const parts = search.split('=')
const id = parts[1]

async function loadData () {
    const categories = await allCategories()
    showCategories(categories)
}

function showCategories (categories) {
    const select = document.getElementById('select-category')
    for(let i = 0; i < categories.length; i++) {
        const option = document.createElement('option')
        select.appendChild(option)
        option.innerHTML = categories[i].name
        option.value = categories[i].id
    }
}

const btnAdd = document.getElementById('addAd')
btnAdd.addEventListener('click', createAd)

async function createAd () {
    const title = document.getElementById('input-title').value
    const description = document.getElementById('input-description').value
    const price = document.getElementById('input-price').value
    const image = document.getElementById('input-image').value
    const categoryId = Number(document.getElementById('select-category').value)
    const userId = id

    document.getElementById('input-title').classList.remove('border')
    document.getElementById('input-description').classList.remove('border')
    document.getElementById('input-price').classList.remove('border')
    document.getElementById('input-image').classList.remove('border')

    if(title == '' || description == '' || price == '' || image == '') {
        if (title == '') {
            document.getElementById('input-title').classList.add('border')
        }
        if (description == '') {
            document.getElementById('input-description').classList.add('border')
        }
        if (price == '') {
            document.getElementById('input-price').classList.add('border')
        }
        if (image == '') {
            document.getElementById('input-image').classList.add('border')
        }
        alert('Niste popunili sva polja!')
        return
    }

    await addAd (title, description, price, image, 0, categoryId, userId)
    window.open(`user.html?id=${id}`)
}


window.addEventListener('load', loadData)