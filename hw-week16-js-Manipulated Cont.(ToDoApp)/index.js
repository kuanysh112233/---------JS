let addBtn = document.getElementById('addBtn')
let listBox = document.getElementById('list-box')
let searshBtn = document.getElementById('searsh-btn')

addBtn.addEventListener('click',(event)=>{
    event.preventDefault() //сохряняет
    let toDoItem = document.getElementById('newTask').value
    console.log(toDoItem);
    if(toDoItem && toDoItem !=null && toDoItem !=undefined){
        let createItem = createNewList(toDoItem)
        listBox.appendChild(createItem)
    }
})

searshBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    let searshText = document.getElementById('searsh-text').textContent.toLowerCase()
    // console.log("izdey ishindegi man ", searshText.value);
    
    let items = listBox.querySelectorAll('div')

    items.forEach((item)=>{
        let paragraph = item.querySelector('p').textContent.toLocaleLowerCase()
        console.log("paragraph manderi: ",paragraph);
        if(paragraph === searshBtn.value.toLowerCase()){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
        
    })
    
    
})


function createNewList(newToDoItem){
    let newDiv = document.createElement('div')
    let itemName = document.createElement('p')
    let deleteButton = document.createElement('button')
    newDiv.className = "newDiv"

    itemName.textContent = newToDoItem
    deleteButton.textContent = "Өшіру"

    deleteButton.addEventListener('click',()=>{
        listBox.removeChild(newDiv)
    })

    newDiv.appendChild(itemName)
    newDiv.appendChild(deleteButton)

    return newDiv
}
