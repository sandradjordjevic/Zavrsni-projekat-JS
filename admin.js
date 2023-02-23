import { userById, allCategories, deleteCategory } from "./src.js"

const search = window.location.search
const parts = search.split('=')
const id = parts[1]

document.getElementById('cat_add').href = `category_add.html?id=${id}`


async function loadData () {
    const user = await userById(id)
    load(user)
    const categories = await allCategories()
    showCategories(categories)
}

function load (user) {
    document.getElementById('firstName').innerHTML = user.firstName
    document.getElementById('lastName').innerHTML = user.lastName
    document.getElementById('userName').innerHTML = user.userName
    document.getElementById('adress').innerHTML = user.adress
    document.getElementById('phoneNumber').innerHTML = user.phoneNumber
    document.getElementById('gender').innerHTML = user.gender
}
 
async function showCategories (categories) {
    const container = document.getElementById('container')
    for(let i = 0; i < categories.length; i++) {
        const box = document.createElement('div')
        box.classList.add('divBox')
        container.appendChild(box)
        const image = document.createElement('img')
        image.src = categories[i].image
        image.style.width = `150px`
        image.style.height = `200px`
        box.appendChild(image)
        const name = document.createElement('h4')
        name.innerHTML = categories[i].name
        box.appendChild(name)
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = 'Delete'
        box.appendChild(btnDelete)
        btnDelete.classList.add('buttonstyle1')
        btnDelete.addEventListener('click', async function () {
            this.parentNode.remove()
            await deleteCategory(categories[i].id)
        })
        const btnUpdate = document.createElement('button')
        btnUpdate.innerHTML = 'Update'
        btnUpdate.classList.add('buttonstyle')
        box.appendChild(btnUpdate)
        btnUpdate.addEventListener('click', function () {
            window.open(`category_edit.html?id=${categories[i].id}`)
        })        
    }
}


window.addEventListener('load', loadData)