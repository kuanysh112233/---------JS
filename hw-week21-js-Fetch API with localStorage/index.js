let films = []
let qorap = document.querySelector('.qorap')

function displayData() {
    let data  = JSON.parse(localStorage.getItem('info'))

    data.forEach(film => {
        let div = document.createElement('div')
        div.className = 'film-cart'

        div.innerHTML = ` <img src = "${film.image}"
        <h2>${film.filmName}</h2>
        <h4>${film.Genre}</h4>
        <button onclick="oshirBtn(${i})">Өшіру</button>
        `
        qorap.appendChild(div)
    });
}

function oshirBtn(index){
    films = JSON.parse(localStorage.getItem('info'))
    films = films.filter((el,i)=>index != i)
    localStorage.setItem('info',JSON.stringify(films))
    window.location.reload()
}

async function fetchData() {
    try{
        let response = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films')

        if(!response.ok){
            throw new Error("Very bad!");
        }
        let data = await response.json()
        data.forEach(element =>{
            films.push(element)    
        })
        localStorage.setItem('info',JSON.stringify(films))
        displayData()
    }catch(err){
        console.log(err);
        
    }
    
}
fetchData()