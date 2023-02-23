import { userById, userAds, allCategories, deleteAd } from "./src.js"
const search = window.location.search
console.log(search)
const parts = search.split('=')
console.log(parts)
const id = parts[1]

let ads

async function loadData() {
    const col1 = document.getElementById('col-1')
    const link = document.createElement('a')
    col1.appendChild(link)
    link.innerHTML = 'Add new ad'
    link.href = `add_ad.html?id=${id}`
    link.classList.add('cols')

    const col2 = document.getElementById('col-2')
    const link2 = document.createElement('a')
    col2.appendChild(link2)
    link2.innerHTML = 'All ads'
    link2.href = `ads.html?id=${id}`
    link2.classList.add('cols')

    const user = await userById(id)
    load(user)
    ads = await userAds(id)
    loadAds(ads)
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

function load (user) {
    document.getElementById('firstName').innerHTML = user.firstName
    document.getElementById('lastName').innerHTML = user.lastName
    document.getElementById('userName').innerHTML = user.userName
    document.getElementById('adress').innerHTML = user.adress
    document.getElementById('phoneNumber').innerHTML = user.phoneNumber
    document.getElementById('gender').innerHTML = user.gender
}

async function loadAds (ads) {
    const categories = await allCategories()
    const container = document.getElementById('container')
    container.innerHTML = ''
    for (let i = 0; i < ads.length; i++) {
        const divBox = document.createElement('div')
        container.appendChild(divBox)
        divBox.classList.add('divBox')
        const category = document.createElement('h3')
        divBox.appendChild(category)
        const categoryId = categories.find(cat => cat.id == ads[i].categoryId)
        category.innerHTML = categoryId.name
        const box = document.createElement('div')
        box.classList.add('box')
        divBox.appendChild(box)
        const div1 = document.createElement('div')
        div1.classList.add('somediv')
        box.appendChild(div1)
        const image = document.createElement('img')
        image.src = ads[i].image
        image.style.width = `150px`
        image.style.height = `200px`
        div1.appendChild(image)
        const div2 = document.createElement('div')
        box.appendChild(div2)
        div2.classList.add('somediv')
        const title = document.createElement('h4')
        title.innerHTML = ads[i].title
        div2.appendChild(title)
        const description = document.createElement('p')
        description.innerHTML = ads[i].description
        div2.appendChild(description)
        const likes = document.createElement('h5')
        likes.innerHTML = `${ads[i].likes} likes`
        div2.appendChild(likes)
        const div3 = document.createElement('div')
        box.appendChild(div3)
        div3.classList.add('somediv1')
        const price = document.createElement('h4')
        price.innerHTML = `${ads[i].price}€`
        div3.appendChild(price)
        price.classList.add('price')

        const div4 = document.createElement('div')
        divBox.appendChild(div4)
        div4.classList.add('div4')
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = 'Delete'
        btnDelete.classList.add('buttonstyle1')
        div4.appendChild(btnDelete)
        btnDelete.addEventListener('click', async function(){
            this.parentNode.parentNode.remove()
            await deleteAd(ads[i].id)
        })

        const link3 = document.createElement('a')
        link3.innerHTML = 'Update ad'
        link3.classList.add('link3')
        div4.appendChild(link3)
        link3.href = `ad_edit.html?id=${ads[i].id}`
    }
}

const btnSearch = document.getElementById('search')
btnSearch.addEventListener('click', searchCategory)

function searchCategory () {
    const categoryId = document.getElementById('select-category').value
    //console.log(categoryId)

    const filteredAds = ads.filter(ad => ad.categoryId == categoryId) 
    loadAds(filteredAds)
}


window.addEventListener('load', loadData)

