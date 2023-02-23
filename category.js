import { adsByCat, allUsers } from "./src.js";
const search = window.location.search
const parts = search.split('=')
const id = parts[1]
async function loadData () {
    const ads = await adsByCat(id)
   showAllAds(ads)
}
async function showAllAds (ads) {
    const users = await allUsers()
    const container = document.getElementById('container')
    for(let i = 0; i < ads.length; i++) {
        const divBox = document.createElement('div')
        container.appendChild(divBox)
        divBox.classList.add('divBox')
        const title = document.createElement('h3')
        title.innerHTML = ads[i].title
        divBox.appendChild(title)
        const box = document.createElement('div')
        box.classList.add('box')
        divBox.appendChild(box)
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
        const description = document.createElement('h4')
        div2.appendChild(description)
        description.innerHTML = ads[i].description
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







window.addEventListener('load', loadData)