console.log('Zavrsni projekat')

async function allUsers () {
    const response = await fetch('http://localhost:3000/users', {method: 'GET'})
    const users = await response.json()
    return users
}

async function userByUserNameAndPassword (userName, password) {
    const response = await fetch (`http://localhost:3000/users?userName=${userName}&password=${password}`, {method: 'GET'})
    const user = await response.json()
    return user
}

async function userById (id) {
    const response = await fetch (`http://localhost:3000/users/${id}`, {method: 'GET'})
    const user = await response.json()
    return user
}

async function allCategories () {
    const response = await fetch (`http://localhost:3000/categories`, {method: 'GET'})
    const categories = await response.json()
    return categories
}

async function CategoryById (id) {
    const response = await fetch (`http://localhost:3000/categories/${id}`, {method: 'GET'})
    const categories = await response.json()
    return categories
}
 
async function regUser (firstName, lastName, usserName, password, adress, phoneNumber, gender, admin) {
    const response = await fetch ('http://localhost:3000/users',
    {method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        firstName: firstName,
        lastName: lastName,
        usserName: usserName,
        password: password,
        adress: adress,
        phoneNumber: phoneNumber,
        gender: gender,
        admin: admin
    })
    })
    const user = await response.json()
    return user
}

async function deleteCategory(id) {
    const response = await fetch (`http://localhost:3000/categories/${id}`, {method: 'DELETE'})
    const category = await response.json()
    return category
}
async function addCategory (name, image) {
    const response = await fetch ('http://localhost:3000/categories',
    {method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        name: name,
        image: image
    })
    })
    const category = await response.json()
    return category
}
async function updateCategory (id, name, image) {
    const response = await fetch (`http://localhost:3000/categories/${id}`,
    {method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        name: name,
        image: image
    })
    })
    const category = await response.json()
    return category
}

async function userAds (id) {
    const response = await fetch (`http://localhost:3000/ads?userId=${id}`, {method: 'GET'})
    const ads = await response.json()
    return ads
}
async function deleteAd (id) {
    const response = await fetch (`http://localhost:3000/ads/${id}`, {method: 'DELETE'})
    const ad = await response.json()
    return ad
}
async function allAds () {
    const response = await fetch (`http://localhost:3000/ads`, {method: 'GET'})
    const ads = await response.json()
    return ads
}
async function adsByCat (categoryId) {
    const response = await fetch (`http://localhost:3000/ads?categoryId=${categoryId}`, {method: 'GET'})
    const ads = await response.json()
    return ads
}
async function addAd (title, description, price, image, likes, categoryId, userId ) {
    const response = await fetch ('http://localhost:3000/ads',
    {method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        title: title,
        description: description,
        price: price,
        image: image,
        likes: likes,
        categoryId: categoryId,
        userId: userId
    })
    })
    const user = await response.json()
    return user
}
async function adById (id) {
    const response = await fetch (`http://localhost:3000/ads/${id}`, {method: 'GET'})
    const ad = await response.json()
    return ad
}
async function updateAd (id, title, description, price, image, likes, categoryId, userId) {
    const response = await fetch (`http://localhost:3000/ads/${id}`,
    {method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        title: title,
        description: description,
        price: price,
        image: image,
        likes: likes,
        categoryId: categoryId,
        userId: userId
    })
    })
    const user = await response.json()
    return user
}
async function adComments (adId) {
    const response = await fetch (`http://localhost:3000/comments?adId=${adId}`, {method: 'GET'})
    const comments = await response.json()
    return comments
}
async function addComment (text, adId) {
    const response = await fetch ('http://localhost:3000/comments',
    {method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        text: text,
        adId: adId
    })
    })
    const comment = await response.json()
    return comment
}

async function loadData () {
    //console.log(await userByUserNameAndPassword('sandradj', 'sandra123'))
    //console.log(await userById(1))
    //console.log(await allCategories())
    //console.log(await deleteCategory(9))    
    //console.log(await userAds(3))
    //console.log(await allAds())
    //console.log(await adComments (1))
    //onsole.log(await adsByCat(1))
    
}
window.addEventListener('load', loadData)
export{regUser, userByUserNameAndPassword, userById, allCategories, deleteCategory, addCategory, updateCategory, CategoryById, userAds, deleteAd, allAds, addAd, adById, updateAd, allUsers, adComments, addComment, adsByCat}