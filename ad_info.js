import { adById, userById, updateAd, adComments, addComment } from "./src.js"

const search = window.location.search
const parts = search.split('=')
const id = parts[1]

async function loadData () {
    const ad = await adById(id)
    showAd(ad)
} 

async function showAd(ad) {
    const container = document.getElementById('container')
    const divAd = document.createElement('div')
    container.appendChild(divAd)
    divAd.classList.add('divAd')
    const div1 = document.createElement('div')
    divAd.appendChild(div1)
    div1.classList.add('flex-1')
    const div2 = document.createElement('div')
    div1.appendChild(div2)
    const div3 = document.createElement('div')
    div1.appendChild(div3)
    const title = document.createElement('h2')
    div2.appendChild(title)
    title.innerHTML = ad.title
    const price = document.createElement('h2')
    price.classList.add('price')
    price.innerHTML = `Cena: ${ad.price}€`
    div3.appendChild(price)
    const image = document.createElement('img')
    image.src = ad.image
    image.style.height = '500px'
    image.style.height = '400px'
    divAd.appendChild(image)
    const description = document.createElement('p')
    divAd.appendChild(description)
    description.innerHTML = ad.description
    const div4 = document.createElement('div')
    divAd.appendChild(div4)
    div4.classList.add('flex-1')
    const div5 = document.createElement('div')
    div4.appendChild(div5)
    const like = document.createElement('h5')
    like.innerHTML = `Broj lajkova: ${ad.likes}`
    div5.appendChild(like)
    const btnLike = document.createElement('button')
    btnLike.innerHTML = 'Like'
    btnLike.classList.add('buttonstyle1')
    divAd.appendChild(btnLike)
    btnLike.addEventListener('click', async function () {
        ad.likes += 1
        like.innerHTML =  `Broj lajkova: ${ad.likes}`
        await updateAd (ad.id, ad.title, ad.description, ad.price, ad.image, ad.likes, ad.categoryId, ad.userId)
    })
    const divInfo = document.createElement('divInfo')
    divAd.appendChild(divInfo)
    const h3 = document.createElement('h3')
    divInfo.appendChild(h3)
    h3.innerHTML = 'Informacije o vlasniku:'
    const user = await userById(ad.userId)
    const labelName = document.createElement('p')
    divInfo.appendChild(labelName)
    labelName.innerHTML = `Ime i prezime: ${user.firstName} ${user.lastName}`
    const labelPhone = document.createElement('p')
    divInfo.appendChild(labelPhone)
    labelPhone.innerHTML = `Broj telefona: ${user.phoneNumber}`


    const commentsDiv = document.createElement('div')
    container.appendChild(commentsDiv)
    commentsDiv.classList.add('commentsDiv')
    const h4 = document.createElement('h4')
    commentsDiv.appendChild(h4)
    h4.innerHTML = 'Comments'
    const listOfComm = document.createElement('ul')
    commentsDiv.appendChild(listOfComm)
    const comments = await adComments(id)
    for(let i = 0; i < comments.length; i++) {
        const il = document.createElement('li')
        listOfComm.appendChild(il)
        il.innerHTML = comments[i].text
    }
    const divCom = document.createElement('div')
    commentsDiv.appendChild(divCom)
    const inputCom = document.createElement('input')
    inputCom.id = 'inputCom'
    divCom.appendChild(inputCom)
    inputCom.placeholder = 'Comment post'
    const btnPost = document.createElement('button')
    divCom.appendChild(btnPost)
    btnPost.innerHTML = 'Post'
    btnPost.classList.add('buttonstyle2')
    btnPost.addEventListener('click', async function () {
        const text = document.getElementById('inputCom').value
        document.getElementById('inputCom').value = ''
        const adId = id
        const comment = document.createElement('li')
        comment.innerHTML = text
        listOfComm.appendChild(comment)
        await addComment(text, adId)
    })
}


window.addEventListener('load', loadData)