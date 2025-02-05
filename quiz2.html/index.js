const apiKey = 'e3ad77404dc88bee59f4a50942c3dbc6';
let div = document.getElementById('cityWeather')



async function showWheather(city){ // эта функция достает данные и показывает на странице
    const fetchedData = await fetchData(city)
    const htmlToAppend = `<div>
                <h1>${fetchedData.main.temp}°C</h1>
                <h3>${fetchedData.name}</h3>
                <p>Влажность: ${fetchedData.main.humidity}</p>
                <p>Скорость Ветра: ${fetchedData.wind.speed}</p>
            </div>`
    div.innerHTML=htmlToAppend
}
const getLocalData = ()=>{ //проверяет данные в localStorage,если они есть то возвращает их иначе возвращает null
    const localData = localStorage.getItem('city')
    if(!localData){return null}
    return localData
}

document.getElementById('btn').addEventListener('click', ()=>{ // выполняется при клике на кнопку,достает данные из инпута и делает запрос
    let city = document.getElementById('city').value
    showWheather(city)  
    localStorage.setItem('city',city)
})
window.addEventListener('load',()=>{ // выполняется при загрузке страницы запускает функцию getLocalData если есть данные то выполняет showWheather
    const localCity = getLocalData()
    if(localCity){
        showWheather(localCity)
    }
})

async function fetchData(city){ // запрос погоды с апишки
    try{
         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`);

         if (response.ok) { 
           return await response.json();
         } else {
           alert("Ошибка HTTP: " + response.status);
         }
    }catch(err){
        console.log(err);
    }
}