import { allCategories } from "./src.js";

let categories = await allCategories()
console.log(categories)

let currentIndex = 0

const name = document.getElementById('name')
name.innerHTML = categories[currentIndex].name
const images = document.getElementById('image')
images.src = categories[currentIndex].image
let id = categories[currentIndex].id
const linkCategory = document.getElementById('categoryLink')
linkCategory.href = `category.html?id=${id}`
function change(value) {
    currentIndex += value
    if(currentIndex == categories.length) {
        currentIndex = 0
    }
    if(currentIndex == -1) {
        currentIndex = categories.length - 1
    }
    name.innerHTML = categories[currentIndex].name
    images.src = categories[currentIndex].image
    id = categories[currentIndex].id
    linkCategory.href = `category.html?id=${id}`
}
window.change = change


