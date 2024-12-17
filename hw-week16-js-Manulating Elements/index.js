const data =[
    {title: '"Абай жолы" - МұхтарӘуезов',
        description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі.'},
    {title: '"Қан мен тер" - Әбдіжәміл Нұрпейісов',
        description: '"Қазақ халқының қиын кезеңдерінің эпикалық баяны.'},
    {title: '"Көшпенділер" - Ілияс Есенберлин',
        description: 'Қазақ хандығының қалыптасу тарихы.'},
    {title: '"За нами Москва" - Александр Бек',
        description: 'Панфиловшылардың ержүректігі туралы тарихи деректі роман.'}
            ];

let container = document.getElementById('container')

data.forEach(i =>{
    const dataContainer = document.createElement('div') 
    container.appendChild(dataContainer)
    const dataTitle= document.createElement('h3') 
    const paragraph = document.createElement('p')
    dataContainer.appendChild(dataTitle) 
    dataContainer.appendChild(paragraph)

    dataTitle.textContent = i.title
    paragraph.textContent = i.description

    const button = document.createElement('button')
    dataContainer.appendChild(button)
    button.textContent="УДАЛИТЬ"
    button.addEventListener('click',()=>{
    container.removeChild(dataContainer)
    })
})

        