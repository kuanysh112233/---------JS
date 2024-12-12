let qorap = document.getElementById('Box')
const greenButton = document.getElementById('green')
const widthButton = document.getElementById('width')
const heightButton = document.getElementById('height')

greenButton.addEventListener('click',()=>{
    qorap.style.backgroundColor = 'green'
    qorap.style.transitionDuration = '1s'

})
widthButton.addEventListener('click',()=>{
    qorap.style.width = parseInt(qorap.style.width) + 10 + 'px'
})
heightButton.addEventListener('click',()=>{
    qorap.style.height = parseInt(qorap.style.height) + 10 + 'px'
})
qorap.addEventListener('mouseleave',()=>{
    qorap.textContent = 'Сіздің мышкаңыз қораптан шығып кетті!"' 
    qorap.style.transitionDuration = '6s'
    qorap.style.display = 'flex'
    qorap.style.alignItems = 'center'
    qorap.style.justifyContent = 'center'
})
qorap.addEventListener('mouseenter',()=>{
    qorap.textContent = 'Өзгеріс көру үшін мышкаңызды қорапқа алып келіңіз' 
    qorap.style.transitionDuration = '6s'
    qorap.style.display = 'flex'
    qorap.style.alignItems = 'center'
    qorap.style.justifyContent = 'center'
})
