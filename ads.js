import { allAds, allUsers, allCategories } from "./src.js";
let ads
async function loadData () {
    ads = await allAds()
    showAllAds(ads)
    const categories = await allCategories()
    showCategories(categories)
}
async function showAllAds (ads) {
    const categories = await allCategories()
    const users = await allUsers()
    const container = document.getElementById('container')
    container.innerHTML = ''
    for(let i = 0; i < ads.length; i++) {
        const divBox = document.createElement('div')
        container.appendChild(divBox)
        divBox.classList.add('divBox')
        const name = document.createElement('h3')
        divBox.appendChild(name)
        name.innerHTML = ads[i].title
        const category = document.createElement('h4')
        divBox.appendChild(category)
        const categoryId = categories.find(cat => cat.id == ads[i].categoryId)
        category.innerHTML = categoryId.name
        const box = document.createElement('div')
        divBox.appendChild(box)
        box.classList.add('box')
        const div1 = document.createElement('div')
        box.appendChild(div1)
        div1.classList.add('somediv')
        const image = document.createElement('img')
        image.src = ads[i].image
        image.style.width = `150px`
        image.style.height = `200px`
        div1.appendChild(image)
        const div2 = document.createElement('div')
        box.appendChild(div2)
        div2.classList.add('somediv')
        const price = document.createElement('h4')
        price.innerHTML = `Cena: ${ads[i].price}€`
        div2.appendChild(price)
        const user = document.createElement('h4')
        div2.appendChild(user)
        const userId = users.find(user => user.id == ads[i].userId)
        user.innerHTML = `Autor oglasa: ${userId.firstName} ${userId.lastName}`
        const likes = document.createElement('h4')
        div2.appendChild(likes)
        likes.innerHTML = `Broj lajkova: ${ads[i].likes}`
        const link = document.createElement('a')
        link.innerHTML = `View`
        link.href = `ad_info.html?id=${ads[i].id}`
        div2.appendChild(link)
    }
} 
async function showCategories(categories) {
    const select = document.getElementById('select-category')
    for (let i = 0; i < categories.length; i++) {
        const option = document.createElement('option')
        select.appendChild(option)
        option.innerHTML = categories[i].name
        option.value = categories[i].id
    }
}
const btnSearch = document.getElementById('btn-search')
btnSearch.addEventListener('click', searching)
function searching () {
    const categoryId = Number(document.getElementById('select-category').value)
    const price1 = Number(document.getElementById('price1').value)
    const price2 = Number(document.getElementById('price2').value)
    
    const filteredAds = ads.filter(ad => ad.categoryId == categoryId)

    for(let i = 0; i < filteredAds.length; i++) {
        if(filteredAds[i].price >= price1 && filteredAds[i].price <= price2) {
            showAllAds(filteredAds)
        } else {
            const container = document.getElementById('container')
            container.remove()
            document.getElementById('message').innerHTML = 'No results'
        }
    }
}

window.addEventListener('load', loadData)