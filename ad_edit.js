import { adById, allCategories, updateAd } from "./src.js"

const search = window.location.search
const parts = search.split('=')
const id = parts[1]
let ad
async function loadData () {
    ad = await adById(id)
    
    const categories = await allCategories()
    showCategories(categories)

    document.getElementById('input-title').value = ad.title
    document.getElementById('input-description').value = ad.description
    document.getElementById('input-price').value = ad.price
    document.getElementById('input-image').value = ad.image
    document.getElementById('select-category').value = ad.categoryId
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

const btnUpdate = document.getElementById('updateAd')
btnUpdate.addEventListener('click', update)

async function update () {
    const title = document.getElementById('input-title').value
    const description = document.getElementById('input-description').value
    const price = document.getElementById('input-price').value
    const image = document.getElementById('input-image').value
    const categoryId = document.getElementById('select-category').value
    const userId = ad.userId

    //console.log(id, title, description, price, image, categoryId, userId)

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
    await updateAd (id, title, description, price, image, 0, categoryId, userId)
    window.open(`user.html?id=${userId}`)

}



window.addEventListener('load', loadData)

