import { CategoryById ,updateCategory } from "./src.js";

const search = window.location.search
const parts = search.split('=')
const id = parts[1]

async function update () {
    const category = await CategoryById(id)

    loadCategory(category)

    const btnUpdate = document.getElementById('btn-update')
    btnUpdate.addEventListener('click', async function () {
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

        await updateCategory(id, name, image)
    })

    function loadCategory (category) {
        const name = document.getElementById('input-name')
        name.value = category.name
        const image = document.getElementById('input-image')
        image.value = category.image
    }
}
window.addEventListener('load', update)
