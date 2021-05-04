const todoItems = ["sport"]


const addButton = document.querySelector('.addButton')
const inputForm = document.querySelector('#input')
const main = document.querySelector('.main')
const tasks = document.querySelector('.tasks')
const buttons = document.querySelector('.buttons')
const items = document.querySelector('.item')


addButton.addEventListener('click', e => {
    if (inputForm.value != '') {
        addItem(inputForm.value)
    }
    inputForm.value = ''
})


function addItem(text) {
    todoItems.push(text)
    tasks.innerHTML = ''
    displayItems()
}

function editItem(i) {
    const item = document.getElementById('inputItem' + i)
    item.disabled = !item.disabled

    if (item.disabled) {
        todoItems[i] = item.value
    }

    if (!item.disabled) {
        const btn = document.getElementById(i)
        btn.classList.add("activeEdit")
    }
    if (item.disabled) {
        const btn = document.getElementById(i)
        btn.classList.remove("activeEdit")
    }

}

function deleteItem(i) {
    const item = document.getElementById('inputItem' + i)
    item.parentElement.remove()
    todoItems.splice(i, 1)
}


function displayItems() {

    for (i in todoItems) {
        tasks.innerHTML += "<div class='item'>" + "<input type='text' id='inputItem" + i + "' class='inputItem' value='" + todoItems[i] + "'disabled>" +
            "<div class='buttons'>" +
            " <button id='" + i + "' class='itemBtn editBtn'>edit</button>" +
            " <button id='" + i + "' class='itemBtn deleteBtn'>delete</button>" +
            "</div>" +
            "     </div>"
    }
    document.querySelectorAll('.editBtn').forEach(item => {
        item.addEventListener('click', event => {
            editItem(item.id)
        })
    })
    document.querySelectorAll('.deleteBtn').forEach(item => {
        item.addEventListener('click', event => {

            deleteItem(item.id)
        })
    })
}



displayItems()


